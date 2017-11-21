/**
 * FeersumNLU API
 * This is the HTTP API for Feersum NLU. See https://github.com/praekelt/feersum-nlu-api-wrappers for examples of how to use the API.
 *
 * OpenAPI spec version: 2.0.3
 * Contact: nlu@feersum.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FeersumNluApi);
  }
}(this, function(expect, FeersumNluApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FeersumNluApi.TrainDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TrainDetails', function() {
    it('should create an instance of TrainDetails', function() {
      // uncomment below and update the code to test TrainDetails
      //var instane = new FeersumNluApi.TrainDetails();
      //expect(instance).to.be.a(FeersumNluApi.TrainDetails);
    });

    it('should have the property immediateMode (base name: "immediate_mode")', function() {
      // uncomment below and update the code to test the property immediateMode
      //var instane = new FeersumNluApi.TrainDetails();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instane = new FeersumNluApi.TrainDetails();
      //expect(instance).to.be();
    });

    it('should have the property wordManifold (base name: "word_manifold")', function() {
      // uncomment below and update the code to test the property wordManifold
      //var instane = new FeersumNluApi.TrainDetails();
      //expect(instance).to.be();
    });

    it('should have the property wordManifoldList (base name: "word_manifold_list")', function() {
      // uncomment below and update the code to test the property wordManifoldList
      //var instane = new FeersumNluApi.TrainDetails();
      //expect(instance).to.be();
    });

  });

}));
