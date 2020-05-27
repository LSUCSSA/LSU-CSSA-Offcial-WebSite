'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */
const generator = require('generate-password');
const _ = require('lodash');
const { sanitizeEntity } = require('strapi-utils');
const parse = require('csv-parse');
const fs = require('fs');
const toArray = require('stream-to-array');

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });

const formatError = error => [
  { messages: [{ id: error.id, message: error.message, field: error.field }] },
];

module.exports = {
  /**
   * Bulk create users
   */
  async bulkCreate(ctx) {
    const advanced = await strapi
      .store({
        environment: '',
        type: 'plugin',
        name: 'users-permissions',
        key: 'advanced',
      })
      .get();

    const rosterFile = ctx.request.files.file;
    if(rosterFile.size !== 0){
      const roster = await toArray(fs.createReadStream(rosterFile.path));
      parse(roster[0], {from_line:4}, async (err, out) =>{
        if (!out[0] || out[0].indexOf('First Name') <= -1 || out[0].indexOf('Last Name') <= -1){
          return ctx.send({status: 'fail', message: '文件格式不正确, 缺少First Name或Last Name列'})
        }
        const userData = out.slice(1, out.length);
        const firstNameIndex = out[0].indexOf('First Name');
        const lastNameIndex = out[0].indexOf('Last Name');
        const emailIndex = out[0].indexOf('Campus Email');
        const positionIndex = out[0].indexOf('Position Name');

        for(const user of userData){
          const email = user[emailIndex];
          const userWithSameEmail= await strapi
            .query('user', 'users-permissions')
            .findOne({ email });
          if (!userWithSameEmail) {
            const tempPass = generator.generate({
              length: 10,
              numbers: true,
              excludeSimilarCharacters: true
            });
            const defaultRole = await strapi
              .query('role', 'users-permissions')
              .findOne({ type: advanced.default_role }, []);
            try {
              const data = await strapi.plugins['users-permissions'].services.user.add(
                {email, password: tempPass, role: defaultRole.id, provider: 'local'}
              );
              ctx.created(data);
            } catch (error) {
              ctx.badRequest(null, formatError(error));
            }
          }
        }
      });
    }else{
      ctx.badRequest({
        status: 'fail'
      })
    }

  }
};
