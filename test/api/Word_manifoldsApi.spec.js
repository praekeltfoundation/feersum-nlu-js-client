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
    instance = new FeersumNluApi.Word_manifoldsApi();
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

  describe('Word_manifoldsApi', function() {
    describe('wordManifoldAddSimilarWords', function() {
      it('should call wordManifoldAddSimilarWords successfully', function(done) {
        //uncomment below and update the code to test wordManifoldAddSimilarWords
        //instance.wordManifoldAddSimilarWords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wordManifoldCreate', function() {
      it('should call wordManifoldCreate successfully', function(done) {
        //uncomment below and update the code to test wordManifoldCreate
        //instance.wordManifoldCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wordManifoldGetSimilarWords', function() {
      it('should call wordManifoldGetSimilarWords successfully', function(done) {
        //uncomment below and update the code to test wordManifoldGetSimilarWords
        //instance.wordManifoldGetSimilarWords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wordManifoldSpellCorrect', function() {
      it('should call wordManifoldSpellCorrect successfully', function(done) {
        //uncomment below and update the code to test wordManifoldSpellCorrect
        //instance.wordManifoldSpellCorrect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
