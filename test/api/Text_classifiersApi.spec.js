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
    instance = new FeersumNluApi.Text_classifiersApi();
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

  describe('Text_classifiersApi', function() {
    describe('controllersTextClassifiersControllerTextClassifierAddTrainingSamples', function() {
      it('should call controllersTextClassifiersControllerTextClassifierAddTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierAddTrainingSamples
        //instance.controllersTextClassifiersControllerTextClassifierAddTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierCreate', function() {
      it('should call controllersTextClassifiersControllerTextClassifierCreate successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierCreate
        //instance.controllersTextClassifiersControllerTextClassifierCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierCurate', function() {
      it('should call controllersTextClassifiersControllerTextClassifierCurate successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierCurate
        //instance.controllersTextClassifiersControllerTextClassifierCurate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierDelTrainingSamples', function() {
      it('should call controllersTextClassifiersControllerTextClassifierDelTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierDelTrainingSamples
        //instance.controllersTextClassifiersControllerTextClassifierDelTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierGetDetails', function() {
      it('should call controllersTextClassifiersControllerTextClassifierGetDetails successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierGetDetails
        //instance.controllersTextClassifiersControllerTextClassifierGetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierGetDetailsAll', function() {
      it('should call controllersTextClassifiersControllerTextClassifierGetDetailsAll successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierGetDetailsAll
        //instance.controllersTextClassifiersControllerTextClassifierGetDetailsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierGetLabels', function() {
      it('should call controllersTextClassifiersControllerTextClassifierGetLabels successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierGetLabels
        //instance.controllersTextClassifiersControllerTextClassifierGetLabels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierGetTrainingSamples', function() {
      it('should call controllersTextClassifiersControllerTextClassifierGetTrainingSamples successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierGetTrainingSamples
        //instance.controllersTextClassifiersControllerTextClassifierGetTrainingSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierRetrieve', function() {
      it('should call controllersTextClassifiersControllerTextClassifierRetrieve successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierRetrieve
        //instance.controllersTextClassifiersControllerTextClassifierRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('controllersTextClassifiersControllerTextClassifierTrain', function() {
      it('should call controllersTextClassifiersControllerTextClassifierTrain successfully', function(done) {
        //uncomment below and update the code to test controllersTextClassifiersControllerTextClassifierTrain
        //instance.controllersTextClassifiersControllerTextClassifierTrain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));