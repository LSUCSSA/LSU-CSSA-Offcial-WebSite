'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.article.search(ctx.query);
    } else {
      // Exclude all title with 推广 ， 广告 。。。。
      entities = await strapi.services.article.find({
        $and: [
          {title: {$regex: /^((?!推广).)*$/}},
          {title: {$regex: /^((?!推荐).)*$/}},
          {title: {$regex: /^((?!广告).)*$/}},
          {title: {$regex: /^((?!免费领卡 免激活费).)*$/}},
          {title: {$regex: /^((?!晚交几天学费iPhone11分分钟).)*$/}},
          {title: {$regex: /^((?!最后10天！迟到15分钟，错过).)*$/}},
          {title: {$regex: /^((?!全美校园精英招聘).)*$/}},
          {title: {$regex: /^((?!一美元).)*$/}},
          {title: {$regex: /^((?!点击领取免费国际机票).)*$/}},
          {title: {$regex: /^((?!听说你用一美元就搞定了通讯套餐？).)*$/}},
          {title: {$regex: /^((?!新生机票预订指南（一大波省钱攻略正在向你袭来).)*$/}},
          {title: {$regex: /^((?!一年真的仅此一次，中国电信秋季一美元活动启动啦).)*$/}},
          {title: {$regex: /^((?!141起，边旅游边学美国历史！).)*$/}},
          {title: {$regex: /^((?!盘点各大主题乐园，任你撒野！).)*$/}},
          {title: {$regex: /^((?!不服来战.大师教你选工作).)*$/}},
          {title: {$regex: /^((?!夏末旅游).)*$/}},
          {title: {$regex: /^((?!十一黄金周旅游).)*$/}},
          {title: {$regex: /^((?!为游－LSU中秋特惠，好礼任你拿！).)*$/}},
          {title: {$regex: /^((?!​秋高气爽，走，看萌萌哒草泥马去).)*$/}},
          {title: {$regex: /^((?!​最夯美帝跨年目的地大搜罗 吻不吻得到TA最后一搏).)*$/}},
          {title: {$regex: /^((?!利程旅游).)*$/}},
          {title: {$regex: /^((?!走四方).)*$/}},
          {title: {$regex: /^((?!听说你用一美元就搞定了手机套餐).)*$/}},
          {title: {$regex: /^((?!Midterm Week也有福利).)*$/}},
          {title: {$regex: /^((?!炸了！30s猜出你最在乎的人是谁).)*$/}},
          {title: {$regex: /^((?!微信红包，免费机票，H1B工作签！点我就给你).)*$/}},
          {title: {$regex: /^((?!寒冬High不停，春假滑雪团报名开启).)*$/}},
          {title: {$regex: /^((?!用一场旅行镌刻青春).)*$/}},
          {title: {$regex: /^((?!we'd'f).)*$/}},
        ]
      });
    }

    return entities.map(entity => sanitizeEntity(entity, {model: strapi.models.article}));
  },
};
