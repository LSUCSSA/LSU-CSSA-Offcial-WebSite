'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const axios = require("axios");

module.exports = {
  async imageProxy(ctx) {
    ctx.type = "image/*";
    const {url} = ctx.query;
    const {data} = await axios.get(url, {
      headers: {
        'User-Agent': '',
        "Referer": ""
      }, responseType: "arraybuffer",
    });
    ctx.send(data);
  }
};
