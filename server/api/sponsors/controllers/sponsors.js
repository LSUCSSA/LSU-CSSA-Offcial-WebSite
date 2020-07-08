'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getSponsorComp(ctx){
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.sponsors.search(ctx.query);
    } else {
      entities = await strapi.services.sponsors.find();
      ctx.send(entities)
    }
  },
  async setSponsorComp(ctx){
    let entities;
    const data = ctx.request.body;
    entities = await strapi.services.sponsors.createOrUpdate({sponsorsList: JSON.stringify(data)});
    ctx.send(entities)
  }
};
