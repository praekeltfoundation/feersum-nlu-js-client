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
    instance = new FeersumNluApi.Lr4_language_recognisersApi();
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

  describe('Lr4_language_recognisersApi', function() {
    describe('controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate', function() {
      it('should call controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate successfully', function(done) {
        //uncomment below and update the code to test controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate
        //instance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails', function() {
      it('should call controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails successfully', function(done) {
        //uncomment below and update the code to test controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails
        //instance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll', function() {
      it('should call controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll
        //instance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels', function() {
      it('should call controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels successfully', function(done) {
        //uncomment below and update the code to test controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels
        //instance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve', function() {
      it('should call controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve successfully', function(done) {
        //uncomment below and update the code to test controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve
        //instance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
