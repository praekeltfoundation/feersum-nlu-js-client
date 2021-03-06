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
    instance = new FeersumNluApi.Similarity_entity_extractorsApi();
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

  describe('Similarity_entity_extractorsApi', function() {
    describe('similarityEntityExtractorCreate', function() {
      it('should call similarityEntityExtractorCreate successfully', function(done) {
        //uncomment below and update the code to test similarityEntityExtractorCreate
        //instance.similarityEntityExtractorCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('similarityEntityExtractorGetDetails', function() {
      it('should call similarityEntityExtractorGetDetails successfully', function(done) {
        //uncomment below and update the code to test similarityEntityExtractorGetDetails
        //instance.similarityEntityExtractorGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('similarityEntityExtractorGetDetailsAll', function() {
      it('should call similarityEntityExtractorGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test similarityEntityExtractorGetDetailsAll
        //instance.similarityEntityExtractorGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('similarityEntityExtractorRetrieve', function() {
      it('should call similarityEntityExtractorRetrieve successfully', function(done) {
        //uncomment below and update the code to test similarityEntityExtractorRetrieve
        //instance.similarityEntityExtractorRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
