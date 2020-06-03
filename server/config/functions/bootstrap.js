'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */
module.exports = async () => {
  await strapi.config.functions["wechatToken"]();
  await strapi.config.functions["fetchLatestNews"]();

  // strapi.query('article').find().then(news =>{
  //   if(news.length === 0){
  //     let offset = 0;
  //     const totalNumNews = axios.get(`https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${token}`).data["news_count"];
  //     for (let i = 0; i < Math.ceil(totalNumNews/20); i++) {
  //       axios.post(`https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
  //         {
  //           "type":'news',
  //           "offset": offset,
  //           "count": 20
  //         }).then(newsData =>{
  //           const {data, status} = newsData;
  //           data["item"].map(item =>{
  //             item["content"]["news_item"];
  //             return {...item["media_id"], }
  //           });
  //           console.log(data)
  //           if(status === 200){
  //             // data['item'].filter()
  //             // strapi.query('article').model.create()
  //           }
  //       });
  //       offset+=20
  //     }
  //   }
  // });

};
