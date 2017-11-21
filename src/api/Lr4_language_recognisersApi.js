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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClassLabelList', 'model/Lr4CreateDetails', 'model/Lr4InstanceDetail', 'model/Lr4InstanceDetailList', 'model/ScoredLabelList', 'model/TextInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClassLabelList'), require('../model/Lr4CreateDetails'), require('../model/Lr4InstanceDetail'), require('../model/Lr4InstanceDetailList'), require('../model/ScoredLabelList'), require('../model/TextInput'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.Lr4_language_recognisersApi = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.ClassLabelList, root.FeersumNluApi.Lr4CreateDetails, root.FeersumNluApi.Lr4InstanceDetail, root.FeersumNluApi.Lr4InstanceDetailList, root.FeersumNluApi.ScoredLabelList, root.FeersumNluApi.TextInput);
  }
}(this, function(ApiClient, ClassLabelList, Lr4CreateDetails, Lr4InstanceDetail, Lr4InstanceDetailList, ScoredLabelList, TextInput) {
  'use strict';

  /**
   * Lr4_language_recognisers service.
   * @module api/Lr4_language_recognisersApi
   * @version 2.0.3
   */

  /**
   * Constructs a new Lr4_language_recognisersApi. 
   * @alias module:api/Lr4_language_recognisersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate operation.
     * @callback module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lr4InstanceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a LR4 text language detector.
     * Create a new LR4 language detector from the pre-trained model name provided. &#39;lid_za&#39; is currently the only pre-trained model that is available, but it was trained on all 11 languages and is pretty accurate. Returns the detail of the new instance.
     * @param {module:model/Lr4CreateDetails} lr4CreateDetails The details of the instance to create.
     * @param {module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lr4InstanceDetail}
     */
    this.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate = function(lr4CreateDetails, callback) {
      var postBody = lr4CreateDetails;

      // verify the required parameter 'lr4CreateDetails' is set
      if (lr4CreateDetails === undefined || lr4CreateDetails === null) {
        throw new Error("Missing the required parameter 'lr4CreateDetails' when calling controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Lr4InstanceDetail;

      return this.apiClient.callApi(
        '/lr4_language_recognisers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails operation.
     * @callback module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lr4InstanceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of named instance.
     * Get the details of the named LR4 text language detector instance.
     * @param {String} instanceName The name of the model instance.
     * @param {module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lr4InstanceDetail}
     */
    this.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails = function(instanceName, callback) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails");
      }


      var pathParams = {
        'instance_name': instanceName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Lr4InstanceDetail;

      return this.apiClient.callApi(
        '/lr4_language_recognisers/{instance_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll operation.
     * @callback module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lr4InstanceDetailList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of loaded LR4 text language detectors.
     * Get the list of loaded LR4 text language detectors.
     * @param {module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lr4InstanceDetailList}
     */
    this.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Lr4InstanceDetailList;

      return this.apiClient.callApi(
        '/lr4_language_recognisers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels operation.
     * @callback module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClassLabelList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of possible labels.
     * Returns the classifier&#39;s list of possible class labels.
     * @param {String} instanceName The name of the model instance.
     * @param {module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClassLabelList}
     */
    this.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels = function(instanceName, callback) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels");
      }


      var pathParams = {
        'instance_name': instanceName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassLabelList;

      return this.apiClient.callApi(
        '/lr4_language_recognisers/{instance_name}/get_labels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve operation.
     * @callback module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScoredLabelList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognise the language the text is written in.
     * Recognise the language the text is written in. Returns the list of scored language codes.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @param {module:api/Lr4_language_recognisersApi~controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScoredLabelList}
     */
    this.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve = function(instanceName, textInput, callback) {
      var postBody = textInput;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve");
      }

      // verify the required parameter 'textInput' is set
      if (textInput === undefined || textInput === null) {
        throw new Error("Missing the required parameter 'textInput' when calling controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve");
      }


      var pathParams = {
        'instance_name': instanceName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ScoredLabelList;

      return this.apiClient.callApi(
        '/lr4_language_recognisers/{instance_name}/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
