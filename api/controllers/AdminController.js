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
    res.render('admin/index');
  }

  /**
   * @todo
   * @param req
   * @param res
   */
  ,createSession: function(req, res) {
    res.send(501);
  }
};

