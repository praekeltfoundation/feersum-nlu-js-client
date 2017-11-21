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
    describe('faqMatcherAddTrainingSamples', function() {
      it('should call faqMatcherAddTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test faqMatcherAddTrainingSamples
        //instance.faqMatcherAddTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherCreate', function() {
      it('should call faqMatcherCreate successfully', function(done) {
        //uncomment below and update the code to test faqMatcherCreate
        //instance.faqMatcherCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherCurate', function() {
      it('should call faqMatcherCurate successfully', function(done) {
        //uncomment below and update the code to test faqMatcherCurate
        //instance.faqMatcherCurate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherDelTrainingSamples', function() {
      it('should call faqMatcherDelTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test faqMatcherDelTrainingSamples
        //instance.faqMatcherDelTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherGetDetails', function() {
      it('should call faqMatcherGetDetails successfully', function(done) {
        //uncomment below and update the code to test faqMatcherGetDetails
        //instance.faqMatcherGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherGetDetailsAll', function() {
      it('should call faqMatcherGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test faqMatcherGetDetailsAll
        //instance.faqMatcherGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherGetLabels', function() {
      it('should call faqMatcherGetLabels successfully', function(done) {
        //uncomment below and update the code to test faqMatcherGetLabels
        //instance.faqMatcherGetLabels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherGetTrainingSamples', function() {
      it('should call faqMatcherGetTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test faqMatcherGetTrainingSamples
        //instance.faqMatcherGetTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherOnlineTrainingSamples', function() {
      it('should call faqMatcherOnlineTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test faqMatcherOnlineTrainingSamples
        //instance.faqMatcherOnlineTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherRetrieve', function() {
      it('should call faqMatcherRetrieve successfully', function(done) {
        //uncomment below and update the code to test faqMatcherRetrieve
        //instance.faqMatcherRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faqMatcherTrain', function() {
      it('should call faqMatcherTrain successfully', function(done) {
        //uncomment below and update the code to test faqMatcherTrain
        //instance.faqMatcherTrain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
