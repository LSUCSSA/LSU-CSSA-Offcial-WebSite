const axios = require("axios");
const moment = require("moment");
const tempWrite = require("temp-write");
const fs = require("fs");

const temp = require('temp').track();
const FileType = require('file-type');
const Mime = require('mime');
const fetch = require('node-fetch');
const util = require('util');
const finished = util.promisify(require("stream").finished);
const pipeline = util.promisify(require("stream").pipeline);

const download_image = (url, param, image_path) =>
  axios({
    url,
    param,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),
  );
const fetchWechatData = async (token, type, offset, param) => {
  let s = type.toUpperCase();
  if (s === 'BATCH_NEWS') {
    try {
      const res = await fetch(`https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`, {
        method: 'POST',
        body: JSON.stringify({
          "type": "news",
          "offset": offset,
          "count": param.count,
        }),
        headers: {'Content-Type': 'application/json'}
      });

      const data = await res.json();
      // const {data} = await axios({
      //   method: 'POST',
      //   url: `https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
      //   data: {
      //     "type": "news",
      //     "offset": offset,
      //     "count": param.count,
      //   }
      // });
      if (data.errcode) {
        console.log(data.errmsg);
        return false
      }
      return data["item"];

    } catch (e) {
      console.log(e);
      return false;
    }

  } else if (s === 'MATERIAL') {
    try {
      const {data} = await axios.post(
        `https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token}`,
        param,
        {responseType: "arraybuffer", responseEncoding: null}
      );
      const {ext} = await FileType.fromBuffer(data);
      const path = temp.path({suffix: `.${ext}`});
      fs.appendFileSync(path, Buffer.from(data));
      return path
      // const {ext} = await FileType.fromStream(data);
      // return new Promise(((resolve, reject) => {
      //   const fws = temp.createWriteStream({suffix: `.${ext}`});
      //   data.pipe(fws);
      //   fws.on("finish", () =>resolve(fws.path));
      //   fws.on("error", err => reject(err))
      //
      // }));
      // const res = await fetch(`https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token}`, {
      //   method: "POST",
      //   body: JSON.stringify(param),
      //   headers: {'Content-Type': 'application/json'}
      // });
      // const {ext} = await FileType.fromStream(data);
      // return tempWrite.sync(data);
      // return `${tempFile}.${ext}`;
      // if (data.errcode) {
      //   console.log(data.errmsg);
      //   return false
      // }
      // const path = temp.path();
      // await download_image(`https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token}`, param, path)
      // return path
      //
      // const fws = temp.createWriteStream({suffix: `.${ext}`});
      // data.pipe(fws);
      // await data.pipeline(fws);
      // fws.end();
      // await finished(fws);
      // fws.on("finish", ()=>{
      //   console.log("done");
      // });
      // return new Promise(((resolve, reject) => {
      //   const fws = fs.createWriteStream(path);
      //   res.body.pipe(fws);
      //   fws.on("close", resolve(fws.path))
      // }));
      // return tempWrite.sync(data)
      // const buffer = await res.buffer();
      // await streamPipeline(data, fws);
      // return fws.path;
      // if (res.ok) {
      //   await streamPipeline(res.body, fws);
      //   return fws.path;
      //   // return new Promise(((resolve, reject) => {
      //   //   res.body.pipe(fws);
      //   //   fws.on('finish', () => resolve(fws.path));
      //   //   fws.on("error", err => {
      //   //     console.log(err);
      //   //     reject(false)
      //   //   })
      //   // }));
      // }
      // return false
      // throw new Error(`unexpected response ${response.statusText}`);
      // return new Promise(((resolve, reject) => {
      //   data.pipe(fws);
      //   fws.on('finish', () => resolve(fws.path));
      //   fws.on("error", err => {
      //     console.log(err);
      //     reject(false)
      //   })
      // }))

    } catch (e) {
      console.log(e.stack);
      return false;
    }

  } else if (s === 'COUNT') {
    try {
      const {data} = await axios.get(
        `https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${token}`
      );
      if (data.errcode) {
        console.log(data.errmsg);
        return false
      }
      return data['news_count']
    } catch (e) {
      console.log(e.stack);
      return false;
    }
  } else {
    return false;
  }

};

const pathToBufferize = async (p) => {
  // let fileName = name;
  // if (!name.includes('.')) {
  //   fileName = fileName.concat(".png")
  // }
  try {
    let fileName = p.split('/').pop();
    if (!p.includes('.')) {
      fileName = fileName.concat(".png")
    }
    const mime = Mime.getType(p);
    if (mime === null || mime === undefined) {
      console.log(p)
    }
    return {
      name: fileName.split(".")[0],
      path: p,
      size: fs.statSync(p)['size'],
      type: mime
    }
  } catch (e) {
    console.log('path value:', p);
    console.log(e.stack)
  }
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
    let numFetch;
    const news = await strapi.query("article").model.find();
    // 0 index offset
    // if db has no news, start from 0, otherwise length -1
    // offset = news.length;
    const dbNewsLen = news.length;
    const numRemainNews = newsCount - news.length;
    numRemainNews < 20 ? numFetch = numRemainNews : numFetch = 20;
    offset = dbNewsLen;
    // offset === 0 ? offset = numRemainNews - 20 : offset = numRemainNews - numFetch;
    console.log(`Wechat news from 0 to ${newsCount - 1}`);
    for (offset; offset < newsCount; offset += numFetch) {
      const batchNews = await fetchWechatData(token, 'batch_news', offset, {count: numFetch});
      if (!batchNews) {
        break;
      }
      numFetch = batchNews.length;
      console.log(`fetch news from offset ${offset} to ${offset + numFetch - 1}`);
      for (const news of batchNews) {
        for (const item of news["content"]["news_item"]) {
          const {
            title,
            author,
            digest,
            content,
            url,
            thumb_media_id,
            thumb_url,
          } = item;
          const createArticle = await strapi.query('article').create({
            title,
            author,
            digest,
            content,
            url,
            thumb_media_id,
            thumb_url,
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
                thumb_media: await pathToBufferize(thumb_media_res)
              }, {
                model: strapi.models.article.modelName
              }).catch(e => {
              console.log(e.stack)
            });
          }
        }
      }
    }
    console.log("End of fetching");
  }
};
