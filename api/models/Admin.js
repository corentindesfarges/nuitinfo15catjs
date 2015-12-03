'use strict';

var sha1 = require('sha1');

/**
 * Admin.js
 *
 * @description :: This model describes an Admin.
 */

module.exports = {

  attributes: {

    firstname: {
      type: 'STRING',
      required: true
    },
    name: {
      type: 'STRING',
      required: true
    },
    password: {
      type: 'STRING',
      protected: true,
      required: true
    },
    email: {
      type: 'EMAIL',
      required: true,
      unique: true
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function (values, cb) {
    // Encrypting password
    values.password = sha1(values.password);

    // First name in capital
    values.firstname = String(values.firstname).charAt(0).toUpperCase() + String(values.firstname).slice(1).toLowerCase();

    // Name in uppercase
    values.name = String(values.name).toUpperCase();
    cb();
  },
};
