"use strict";

/**
 * Wechat.js controller
 *
 * @description: A set of functions called "actions" of the `wechat` plugin.
 */

module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async ctx => {
    // Add your own logic here.
    console.log(ctx);
    // Send 200 `ok`
    ctx.send({
      message: "ok"
    });
  }
};
