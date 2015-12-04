/**
 * CrisisController
 *
 * @description :: Server-side logic for managing Crises
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    renderAdmin: function(req, res) {
        Crisis
            .findOne(req.param('id'))
            .exec(function(err, crisis) {
                if (err) {
                    sails.log.error(err);
                    res.send(500);
                }
                else if ('undefined' === typeof crisis)
                {
                    res.send(404);
                }
                else {
                    res.view('crisis/admin', {
                        crisis: crisis
                    });
                }
            });
    }

    ,renderCreation: function(req, res) {
        res.view('crisis/creation', {
            layout: 'layout'
        });
    }

    ,createCrisis: function(req, res) {
        if('undefined' === typeof req.param('crisis')) {
            res.send(400);
        }
        else {
            Crisis
                .create(req.param('crisis'))
                .exec(function(err, crisis) {
                    if (err) {
                        res.send(500);
                    }
                    else {
                        sails.log('New crisis created!');
                        res.send(201);
                    }
                });

        }
        res.send(501);
    }
};

