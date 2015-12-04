/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    longitude: {
      type: 'FLOAT'
      ,required: true
    }
    ,latitude: {
      type: 'FLOAT'
      ,required: true
    }
    ,city: {
      type: 'STRING'
    }
    ,country: {
      type: 'STRING'
      ,required: true
    }

  }
};

