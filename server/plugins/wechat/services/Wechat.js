'use strict';

/**
 * Wechat.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */
const moment = require("moment");

const getToken =  async() =>{
   await strapi.query('wechat-token')
    .find().then(data =>{
     console.log(data)
      if(moment().isBefore(data[0].expireDateTime)){
        return data[0].accessToken
      }else{
        console.log("token expired");
        return false
      }
    });
};

module.exports = {
  getToken
};
