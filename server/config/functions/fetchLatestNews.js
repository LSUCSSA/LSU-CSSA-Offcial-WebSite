const axios = require("axios");
const moment = require("moment");
const tempWrite = require("temp-write");
const fs = require("fs");
const mime = require('mime');

const fetchWechatData = async (token, type, offset, param) => {
  let s = type.toUpperCase();
  if (s === 'BATCH_NEWS') {
    try {
      const {data} = await axios.post(
        `https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
        {
          type: "news",
          offset: offset,
          count: 20,
        }
      );
      return data["item"];
    } catch (e) {
      console.log(e.errmsg);
      return false;
    }

  } else if (s === 'MATERIAL') {
    try {
      const {data, headers} = await axios.post(
        `https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token}`,
        param,
        {responseType: "arraybuffer", responseEncoding: null}
      );
      return {
        path: await tempWrite.sync(data),
        name: headers["content-disposition"].replace(/['"]+/g, '').split('=')[1].replace(/['"]+/g, '')
      }
    } catch (e) {
      console.log(e);
      return false;
    }

  } else if (s === 'COUNT') {
    try {
      const {data} = await axios.get(
        `https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${token}`
      );
      return data['news_count']
    } catch (e) {
      console.log(e.errcode);
      return false;
    }
  } else {
    return false;
  }

};

const pathToBufferize = (path, name, media_id) => {
  let fileName = name;
  if (!name.includes('.')) {
    fileName = fileName.concat(".png")
  }
  return {name: media_id+"."+fileName.split(".")[1], path: path, size: fs.statSync(path)['size'], type: mime.getType(fileName)}
};
module.exports = async () => {
  const token = await strapi
    .query("wechat-token")
    .find()
    .then((data) => {
      if (moment().isBefore(data[0].expireDateTime)) {
        return data[0].accessToken;
      } else {
        console.log("token expired");
        return false;
      }
    }).catch(e => {
      console.log(e.stack)
    });
  console.log(token);

  const newsCount = await fetchWechatData(token, 'count');
  if (newsCount) {
    let offset;
    strapi
      .query("article")
      .model.find()
      .then(async (news) => {
        offset = news.length;
        offset === 0 ? offset = newsCount - 20 : offset = newsCount - offset - 1;
        for (let i = offset; i >= 0; i -= 20) {
          const batchNews = await fetchWechatData(token, 'batch_news', offset);
          console.log(`fetch ${i} news`);
          for (const news of batchNews) {
            const {
              title,
              author,
              digest,
              content,
              url,
              thumb_media_id,
            } = news["content"]["news_item"][0];
            const createArticle = await strapi.query('article').create({
              title,
              author,
              digest,
              content,
              url,
              thumb_media_id,
              // thumb_media: d,
              update_time: moment
                .unix(news["update_time"])
                .toISOString(),
              media_id: news["media_id"],
            }).catch(e => {
              console.log(e.stack)
            });
            if (thumb_media_id !== "") {
              const thumb_media_res = await fetchWechatData(token, 'material', null, {media_id: thumb_media_id});
              await strapi.entityService.uploadFiles(createArticle,
                {
                  thumb_media: {
                    ...pathToBufferize(thumb_media_res.path, thumb_media_res.name, news["media_id"])
                  }
                }, {
                  model: strapi.models.article.modelName
                }).catch(e => {
                console.log(e.stack)
              });
            }
          }
          offset -= 20;
        }

      })
  }
};
