/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  sails.on('lifted', function () {
    Admin
      .find()
      .exec(function (err, admin) {
        if (err) {
          sails.log.error(err);
        }
        else if ('undefined' === typeof admin || (Array.isArray(admin) && 0 === admin.length)) {
          Admin.createDefaultAdmin()
            .then(function (admin) {
              sails.log(admin);
            })
            .catch(sails.log.error);
        }
        else {
          sails.log('There is already an admin');
        }

      });


      Location.create({
        longitude: '46,8512541',
        latitude: '-46,8512541',
        city: 'Dijon',
        country: 'France'
      }, function (err, location) {
        Crisis.create({
          startDate: new Date(),
          endDate: new Date(),
          localisation: location,
          type: 'Attaque de Stormtooper'
        })
          .then(function (crisis) {
            sails.log(crisis);
          });
      });

      Location.create({
        longitude: '47,8512541',
        latitude: '-46,8515541',
        city: 'ST JEAN DES PRES',
        country: 'Francemagne'
      }, function (err, location) {
        Crisis.create({
          startDate: new Date(),
          endDate: new Date(),
          localisation: location,
          type: 'Les Chats contre attaquent'
        })
          .then(function (crisis) {
            sails.log(crisis);
          });
      });

      Location.create({
        longitude: '47,8512541',
        latitude: '-46,8515541',
        city: 'Berlin',
        country: 'Deutsch'
      }, function (err, location) {
        Crisis.create({
          startDate: new Date(),
          endDate: new Date(),
          localisation: location,
          type: 'Fred wOLF is Back...'
        })
          .then(function (crisis) {
            sails.log(crisis);
          });
      });

    //detectCriticalWords();
  });

  cb();

};
