'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */
const generator = require('generate-password');
const _ = require('lodash');
const {sanitizeEntity} = require('strapi-utils');
const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const toArray = require('stream-to-array');

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });

const formatError = error => [
  {messages: [{id: error.id, message: error.message, field: error.field}]},
];

module.exports = {
  /**
   * Fetch Rosters not include admins
   */
  async fetchRoster(ctx, next, {populate} = {}) {

    let users;

    if (_.has(ctx.query, '_q')) {
      // use core strapi query to search for users
      users = await strapi
        .query('user', 'users-permissions')
        .search(ctx.query, populate);
    } else {
      users = await strapi.plugins['users-permissions'].services.user.fetchAll(
        ctx.query,
        populate
      );
    }
    const data = users.map(u => {
      const users = sanitizeUser(u);
      return {
        id: u.id,
        name: users.name,
        email: users.email,
        department: users.department,
        position: users.position,
        points: users.points
      }
    });

    ctx.send(data)
  },
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
    if (rosterFile.size !== 0) {
      const rosterBuffer = await toArray(fs.createReadStream(rosterFile.path));
      const rosterCsv = parse(rosterBuffer[0], {from_line: 4});
      if (!rosterCsv) {
        return ctx.badRequest({
          status: 'fail',
          message: "error reading csv file"
        })
      }
      if (!rosterCsv[0] || rosterCsv[0].indexOf('First Name') <= -1 || rosterCsv[0].indexOf('Last Name') <= -1) {
        return ctx.send({status: 'fail', message: '文件格式不正确, 缺少First Name或Last Name列'})
      }
      const userData = rosterCsv.slice(1, rosterCsv.length);
      const firstNameIndex = rosterCsv[0].indexOf('First Name');
      const lastNameIndex = rosterCsv[0].indexOf('Last Name');
      const emailIndex = rosterCsv[0].indexOf('Campus Email');
      let bulkData = [];

      const defaultRole = await strapi
        .query('role', 'users-permissions')
        .findOne({type: advanced.default_role}, []);

      for (const user of userData) {
        const email = user[emailIndex];
        const userWithSameEmail = await strapi
          .query('user', 'users-permissions')
          .findOne({email});
        if (!userWithSameEmail) {
          try {
            const tempPass = await generator.generate({
              length: 10,
              numbers: true,
              excludeSimilarCharacters: true
            });
            let data = await strapi.plugins['users-permissions'].services.user.add(
              {
                email,
                password: tempPass,
                role: defaultRole.id,
                provider: 'local',
                username: user[firstNameIndex] + user[lastNameIndex],
                name: `${user[firstNameIndex]} ${user[lastNameIndex]}`,
                position: 'member'
              }
            );
            if (data) {
              data = sanitizeUser(data);
              //TODO sub out the fixed email
              await strapi.plugins['email'].services.email.send({
                to: data.email,
                from: 'contact@lsucsssa.org',

              })
              bulkData.push(data)
            }
          } catch (error) {
            console.log(error);
            ctx.badRequest({
              status: 'fail'
            })
          }
        }
      }
      if (bulkData) {
        ctx.send({status: "success", data: bulkData})
      }
    } else {
      ctx.badRequest({
        status: 'fail'
      })
    }
  },
  async getPositionList(ctx) {
    const contentType = strapi.contentTypes['plugins::users-permissions.user'];
    if (!contentType) {
      return ctx.send({error: 'contentType.notFound'}, 404);
    }
    const contentTypeService = strapi.plugins['content-type-builder'].services.contenttypes;
    const userAttributes = contentTypeService.formatContentType(contentType).schema.attributes;
    ctx.send({position: userAttributes.position.enum, department: userAttributes.department.enum})
  }
};
