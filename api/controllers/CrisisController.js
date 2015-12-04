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
            .populate('localisation')
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
                    res.view('admin/showcrisis', {
                        crisis: crisis
                    });
                }
            });
    }

    ,renderCreation: function(req, res) {
        res.view('admin/createcrisis', {
            layout: 'layout'
        });
    }

    ,createCrisis: function(req, res) {
        if('undefined' === typeof req.params) {
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

    ,destroyCrisis: function(req, res) {
        if('undefined' === typeof req.param('id')) {
            res.send(400);
        }
        else {
            Crisis
                .destroy(req.param('id'))
                .exec(function(err, crisis) {
                    if (err) {
                        res.send(500);
                    }
                    else if ('undefined' === typeof crisis) {
                        res.send(404);
                    }
                    else {
                        res.send(200);
                    }
                });
        }
    }

    ,renderCrises: function(req, res) {
        Crisis
            .find()
            .exec(function(err, crises) {
                if (err) {
                    res.send(500);
                }
                else {
                    res.view('crisis/index', {
                        layout: 'layout'
                        ,crises: crises
                    });
                }
            });
    }

    ,renderCrisis: function(req, res) {
        Crisis
            .findOne(req.param(id))
            .exec(function(err, crisis) {
                if (err) {
                    res.send(500);
                }
                else if ('undefined' === typeof crisis) {
                    res.send(404);
                }
                else {
                    res.view('crisis/details', {
                        layout: 'layout'
                        ,crisis: crisis
                    });
                }
            });
    }
};

