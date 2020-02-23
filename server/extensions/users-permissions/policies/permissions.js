const _ = require("lodash");

module.exports = async (ctx, next) => {
  let role;
  console.log(ctx);
  if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
    } catch (err) {
      // It will be there!

      return handleErrors(ctx, err, "unauthorized");
    }
  }
};
