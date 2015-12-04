'use strict';

/**
* Crisis.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    startDate: {
      type: "DATE"
      ,required: true
    }
    ,endDate: {
      type: "DATE"
      ,required: true
    }
    ,localisation: {
      model: 'Location'
      , required: true
    }
    ,
    type: {
      type: 'STRING'
      ,required: true
    }

  }
};

