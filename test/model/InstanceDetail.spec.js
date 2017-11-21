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
    instance = new FeersumNluApi.InstanceDetail();
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

  describe('InstanceDetail', function() {
    it('should create an instance of InstanceDetail', function() {
      // uncomment below and update the code to test InstanceDetail
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be.a(FeersumNluApi.InstanceDetail);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property desc (base name: "desc")', function() {
      // uncomment below and update the code to test the property desc
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property trainingAccuracy (base name: "training_accuracy")', function() {
      // uncomment below and update the code to test the property trainingAccuracy
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property trainingStamp (base name: "training_stamp")', function() {
      // uncomment below and update the code to test the property trainingStamp
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property trainingCm (base name: "training_cm")', function() {
      // uncomment below and update the code to test the property trainingCm
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property cmLabels (base name: "cm_labels")', function() {
      // uncomment below and update the code to test the property cmLabels
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property wordManifoldList (base name: "word_manifold_list")', function() {
      // uncomment below and update the code to test the property wordManifoldList
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instane = new FeersumNluApi.InstanceDetail();
      //expect(instance).to.be();
    });

  });

}));
