/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // ADMIN
  'GET /admin': {
    controller: 'AdminController'
    ,action: 'renderIndex'
  }
  ,'GET /admin/login': {
    controller: 'AdminController'
    ,action: 'renderLogin'
  }
  ,'POST /API/admin/session': {
    controller: 'AdminController'
    ,action: 'createSession'
  }
  ,'POST /API/admin/session/delete': {
    controller: 'AdminController'
    ,action: 'deleteSession'
  }

  // CRISIS
  ,'GET /admin/crisis/create' : {
    controller: 'CrisisController'
    ,action: 'renderCreation'
  }
  ,'GET /admin/crisis/show/:id': {
    controller: 'CrisisController'
    ,action: 'renderAdmin'
  }
  ,'POST /API/crisis': {
    controller: 'CrisisController'
    ,action: 'createCrisis'
  }
  ,'DELETE /API/crisis/:id': {
    controller: 'CrisisController'
    ,action: 'destroyCrisis'
  }

  // HOME
  ,'GET /': {
    controller: 'CrisisController'
    ,action: 'renderCrises'
  }
  ,'GET /crisis': {
    controller: 'CrisisController'
    ,action: 'renderCrises'
  }
  ,'GET /crisis/:id': {
    controller: 'CrisisController'
    ,action: 'renderCrisis'
  }

  // ROOM
  ,'GET /room/:id' : { // TODO
    controller: 'RoomController'
    ,action: 'renderRoom'
  }

  // PRIVATEROOM
  ,'POST /API/privateroom': { // TODO
    controller: 'PrivateRoomController'
    ,action: 'createPrivateRoom'
  }
  ,'GET /privateroom/:id': { // TODO
    controller: 'PrivateRoomController'
    ,action: 'renderPrivateRoom'
  }
  ,'DELETE /API/privateroom/:id': { // TODO
    controller: 'PrivateRoomController'
    ,action: 'destroyPrivateRoom'
  }


};
