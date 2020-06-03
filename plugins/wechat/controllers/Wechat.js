"use strict";

/**
 * Wechat.js controller
 *
 * @description: A set of functions called "actions" of the `wechat` plugin.
 */
const sha1 = require("crypto-js/sha1");
const CryptoJS = require("crypto-js");
const axios = require("axios");
module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  verify: async ctx => {
    try{
      const str = ctx.url.split("?")[1].split("&");
      const signature = str[0].split("=")[1];
      const echostr = str[1].split("=")[1];
      const timestamp = str[2].split("=")[1];
      const nonce = str[3].split("=")[1];
      const token = "gotigers2015";

      const temp = [token, timestamp, nonce];
      temp.sort();
      const finalStr = temp.join("");
      const hashStr = CryptoJS.enc.Hex.stringify(sha1(finalStr));

      if (hashStr === signature) {
        ctx.send(echostr);
      } else {
        ctx.send(false);
      }
    }catch (e) {
      ctx.send(false)
    }
  },
  getAccessToken: async ctx => {
    const token = await strapi.services.getToken();
    if(token){
      ctx.send(token)
    }
  },
  fetchNewsArticle: async ctx => {
    const token = await strapi.services.getToken();
    await axios.post(`https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
      {
        "type":'news',
        "offset": 0,
        "count": 1
      })
  }
};
