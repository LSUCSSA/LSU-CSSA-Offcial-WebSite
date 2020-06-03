const axios = require('axios');
const moment = require('moment');

module.exports = async () => {
  const { data } = await axios.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${process.env.wechatAppID}&secret=${process.env.wechatAppSecret}`
  );
  if (data.errcode !== 40164){
    await strapi.query('wechat-token').find().then(async d =>{
      if (d.length !== 0){
        const token = await strapi.query('wechat-token').update(
          {_id: d[0]._id},
          {
            accessToken: data.access_token,
            ExpireTime: data.expires_in,
            expireDateTime: moment().add(90, 'm').toDate()
          });
        return token.accessToken;
        //   .then((token)=>{
        //   console.log("Server start and updated a new wechat token");
        //   return token.accessToken;
        // });
      }else{
         const token = await strapi.query('wechat-token').create({
          accessToken: data.access_token,
          ExpireTime: data.expires_in,
          expireDateTime: moment().add(90, 'm').toDate()
        });
        return token.accessToken
        //    .then((token)=>{
        //   console.log("create a new wechat token");
        //   return token.accessToken
        // })
      }
    })
  }else{
    console.log("IP blocked")
  }
};
