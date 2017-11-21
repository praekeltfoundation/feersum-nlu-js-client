/**
 * FeersumNLU API
 * This is the HTTP API for Feersum NLU. See https://github.com/praekelt/feersum-nlu-api-wrappers for examples of how to use the API.
 *
 * OpenAPI spec version: 2.0.3
 * Contact: nlu@feersum.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    instance = new FeersumNluApi.Regex_entity_extractorsApi();
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

  describe('Regex_entity_extractorsApi', function() {
    describe('regexEntityExtractorCreate', function() {
      it('should call regexEntityExtractorCreate successfully', function(done) {
        //uncomment below and update the code to test regexEntityExtractorCreate
        //instance.regexEntityExtractorCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('regexEntityExtractorGetDetails', function() {
      it('should call regexEntityExtractorGetDetails successfully', function(done) {
        //uncomment below and update the code to test regexEntityExtractorGetDetails
        //instance.regexEntityExtractorGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('regexEntityExtractorGetDetailsAll', function() {
      it('should call regexEntityExtractorGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test regexEntityExtractorGetDetailsAll
        //instance.regexEntityExtractorGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('regexEntityExtractorRetrieve', function() {
      it('should call regexEntityExtractorRetrieve successfully', function(done) {
        //uncomment below and update the code to test regexEntityExtractorRetrieve
        //instance.regexEntityExtractorRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
