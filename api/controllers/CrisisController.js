/**
 * CrisisController
 *
 * @description :: Server-side logic for managing Crises
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    renderAdmin: function(req, res) {
        res.view('crisis/admin', {
            layout: 'layout'
        });
    }

    ,renderCreation: function(req, res) {
        res.view('crisis/creation', {
            layout: 'layout'
        });
    }

    ,createCrisis: function(req, res) {
        // TODO
        res.send(501);
    }
};

