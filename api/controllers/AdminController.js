'use strict';

var sha1 = require('sha1');

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
      layout: 'layout',
      admin: req.session.admin
    });
  }

  /**
   * Render the login view for admins
   * @param req
   * @param res
   */
  ,renderLogin: function(req, res) {
    res.view('admin/login', {
        layout: 'layout'
      });
  }

  /**
   * @todo
   * @param req
   * @param res
   */
  ,createSession: function(req, res) {

    var adminEmail = req.param('adminEmail');
    var adminPassword = req.param('adminPassword');

    Admin.findOneByEmail(adminEmail, function(err, admin) {
      if(err) {
        res.send(500);
      }
      else if ('undefined' === typeof admin) {
        res.send(404);
      }
      else {
        // There is an admin with this name
        // Checking password
        if(sha1(adminPassword) == admin.password) {
          // Passwords match
          sails.log.info('Admin logged in!');
          req.session.admin = admin.toJSON();
          res.redirect('/admin');
        }
        else {
          // Password doesn't match
          res.send(404);
        }
      }
    });
  }

  ,deleteSession: function(req, res) {

    req.session.admin = undefined;
    res.redirect('/admin');

  }
};

