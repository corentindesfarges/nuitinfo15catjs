'use strict';

var sha1 = require('sha1')

/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * Render the main view for admins
   * @param req
   * @param res
   */
  renderIndex: function(req, res) {
    res.view('admin/index', {
      layout: 'layout'
    });
  }

  /**
   * @todo
   * @param req
   * @param res
   */
  ,createSession: function(req, res) {

    var adminName = req.param('adminName');
    var adminPassword = req.param('adminPassword');

    Admin.findByName(adminName, function(err, admin) {
      if(err) {
        res.error(500);
      }
      else if ('undefined' === typeof admin) {
        res.send(404);
      }
      else {
        // There is an admin with this name
        // Checking password
        if(sha1(adminPassword) === admin.password) {
          // Passwords match
          req.session.user = admin.toJSON();
          res.send(200);
        }
        else {
          // Password doesn't match
          res.send(404);
        }
      }
    });

    res.send(501);
  }
};

