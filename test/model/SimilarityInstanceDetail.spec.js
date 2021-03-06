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
    instance = new FeersumNluApi.SimilarityInstanceDetail();
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

  describe('SimilarityInstanceDetail', function() {
    it('should create an instance of SimilarityInstanceDetail', function() {
      // uncomment below and update the code to test SimilarityInstanceDetail
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be.a(FeersumNluApi.SimilarityInstanceDetail);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property desc (base name: "desc")', function() {
      // uncomment below and update the code to test the property desc
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property similarWords (base name: "similar_words")', function() {
      // uncomment below and update the code to test the property similarWords
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

    it('should have the property wordManifold (base name: "word_manifold")', function() {
      // uncomment below and update the code to test the property wordManifold
      //var instane = new FeersumNluApi.SimilarityInstanceDetail();
      //expect(instance).to.be();
    });

  });

}));
