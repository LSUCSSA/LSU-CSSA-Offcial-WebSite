const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const FormData = require('form-data');
const temp = require('temp').track();


module.exports = async () => {
  const token = await strapi.query('wechat-token')
    .find().then(data =>{
      if(moment().isBefore(data[0].expireDateTime)){
        return data[0].accessToken
      }else{
        console.log("token expired");
        return false
      }
    });
  console.log(token);

    const {data} = await axios.get(`https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${token}`);
    const newsCount = data["news_count"];
    strapi.query('article').model.find().then(async news =>{
      let offset = news.length;
      offset = offset === 0 ? newsCount-20: newsCount-offset-1;
      // strapi.config.environments.development.adminUsername+
      const data = await axios.post(strapi.config.url+'/auth/local', {
        identifier: strapi.config.environments.development.adminUsername,
        password: strapi.config.environments.development.adminPassword,
      }).then(d => d).catch(async err=>{
        const {data} = await axios.post(strapi.config.url+'/auth/local/register', {
          username: strapi.config.environments.development.adminUsername,
          email: strapi.config.environments.development.adminEmail,
          password: strapi.config.environments.development.adminPassword,
        });
        return data
      });
      const jwtToken = data.jwt || "";
      for (let i = offset; i >= 0; i-=20) {
        const {data} = await axios.post(`https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
          {
            "type":'news',
            "offset": offset,
            "count": 20
          });
        const newsData = data;
        if(newsData.errcode === 45009){
          console.log(newsData.errmsg);
          break;
        }else{
          const dataToSave = newsData.item.map(async item =>{
            if(item["content"]["news_item"].length === 0){
              console.log("no data")
            }else{
              const {title, author, digest, content, url, thumb_media_id} = item["content"]["news_item"][0];
              const {data} = await axios.post(`https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token}`,
                {
                  "media_id": thumb_media_id
                },{responseType: 'arraybuffer', responseEncoding: null}
              );
              if (data.errorCode === 45009){
                  console.log(data.errormsg);
              }else{
                return {title, author, digest, content, url, thumb_media_id, thumb_media: data,
                  update_time: moment.unix(item["update_time"]).toISOString(), media_id: item["media_id"]};
              }
            }
          });
          Promise.all(dataToSave).then(res=>{
            let insertData = [];
            const thumb_media_upload =  res.map(item =>{
              const {thumb_media, ...data } = item;
              insertData.push(data);
              return {media_id: item.media_id, thumb_media: item.thumb_media}
            });

            strapi.query('article').model.collection.insertMany(insertData).then(vals =>{
              // thumb_media_upload.forEach(async val =>{
              //   const news = await vals.ops.find(i => i.media_id === val.media_id);
              //   const formData = new FormData();
              //   formData.append("ref", "articles");
              //   formData.append("refId", news._id.toString());
              //   formData.append("field", "thumb_media");
              //   formData.append('files.thumb_media', val.thumb_media);
              //   await axios.post(strapi.config.url+"/upload", formData, {headers: {Authorization: `Bearer ${jwtToken}`}}).then(console.log("success")).catch(err => console.log(err.data))
              // })

            }).catch(err=>{
              console.log(err);
              console.log(err.errmsg);
              console.log(err.op.title);
            });

          });
          // strapi.query('article').model.find().then(data =>{
          //   console.log(data)
          //
          // })

          offset-=20;
        }
      }


  });

};
