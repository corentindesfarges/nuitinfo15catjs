'use strict';

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
  }
};
