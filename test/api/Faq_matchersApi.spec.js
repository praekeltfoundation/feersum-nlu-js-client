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
    instance = new FeersumNluApi.Faq_matchersApi();
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

  describe('Faq_matchersApi', function() {
    describe('controllersFaqMatchersControllerFaqMatcherAddTrainingSamples', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherAddTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherAddTrainingSamples
        //instance.controllersFaqMatchersControllerFaqMatcherAddTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherCreate', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherCreate successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherCreate
        //instance.controllersFaqMatchersControllerFaqMatcherCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherCurate', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherCurate successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherCurate
        //instance.controllersFaqMatchersControllerFaqMatcherCurate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherDelTrainingSamples', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherDelTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherDelTrainingSamples
        //instance.controllersFaqMatchersControllerFaqMatcherDelTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherGetDetails', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherGetDetails successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherGetDetails
        //instance.controllersFaqMatchersControllerFaqMatcherGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherGetDetailsAll', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherGetDetailsAll
        //instance.controllersFaqMatchersControllerFaqMatcherGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherGetLabels', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherGetLabels successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherGetLabels
        //instance.controllersFaqMatchersControllerFaqMatcherGetLabels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherGetTrainingSamples', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherGetTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherGetTrainingSamples
        //instance.controllersFaqMatchersControllerFaqMatcherGetTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples
        //instance.controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherRetrieve', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherRetrieve successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherRetrieve
        //instance.controllersFaqMatchersControllerFaqMatcherRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersFaqMatchersControllerFaqMatcherTrain', function() {
      it('should call controllersFaqMatchersControllerFaqMatcherTrain successfully', function(done) {
        //uncomment below and update the code to test controllersFaqMatchersControllerFaqMatcherTrain
        //instance.controllersFaqMatchersControllerFaqMatcherTrain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
