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
    define(['ApiClient', 'model/EntityList', 'model/RegexEntCreateDetails', 'model/RegexInstanceDetail', 'model/RegexInstanceDetailList', 'model/TextInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EntityList'), require('../model/RegexEntCreateDetails'), require('../model/RegexInstanceDetail'), require('../model/RegexInstanceDetailList'), require('../model/TextInput'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.Regex_entity_extractorsApi = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.EntityList, root.FeersumNluApi.RegexEntCreateDetails, root.FeersumNluApi.RegexInstanceDetail, root.FeersumNluApi.RegexInstanceDetailList, root.FeersumNluApi.TextInput);
  }
}(this, function(ApiClient, EntityList, RegexEntCreateDetails, RegexInstanceDetail, RegexInstanceDetailList, TextInput) {
  'use strict';

  /**
   * Regex_entity_extractors service.
   * @module api/Regex_entity_extractorsApi
   * @version 2.0.3
   */

  /**
   * Constructs a new Regex_entity_extractorsApi. 
   * @alias module:api/Regex_entity_extractorsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate operation.
     * @callback module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegexInstanceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a regular expression entity extractor.
     * Create a new regular expression entity extractor or load one from the store.
     * @param {module:model/RegexEntCreateDetails} regexEntCreateDetails The details of the instance to create.
     * @param {module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegexInstanceDetail}
     */
    this.controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate = function(regexEntCreateDetails, callback) {
      var postBody = regexEntCreateDetails;

      // verify the required parameter 'regexEntCreateDetails' is set
      if (regexEntCreateDetails === undefined || regexEntCreateDetails === null) {
        throw new Error("Missing the required parameter 'regexEntCreateDetails' when calling controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate");
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
      var returnType = RegexInstanceDetail;

      return this.apiClient.callApi(
        '/regex_entity_extractors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails operation.
     * @callback module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegexInstanceDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of named instance.
     * Get the details of the named regular expression entity extractor instance.
     * @param {String} instanceName The name of the model instance.
     * @param {module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegexInstanceDetail}
     */
    this.controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails = function(instanceName, callback) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails");
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
      var returnType = RegexInstanceDetail;

      return this.apiClient.callApi(
        '/regex_entity_extractors/{instance_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll operation.
     * @callback module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegexInstanceDetailList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of loaded regular expression entity extractors.
     * Get the list of loaded regular expression entity extractors.
     * @param {module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegexInstanceDetailList}
     */
    this.controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll = function(callback) {
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
      var returnType = RegexInstanceDetailList;

      return this.apiClient.callApi(
        '/regex_entity_extractors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve operation.
     * @callback module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract information based on the regular expression.
     * Extract the entities matching the regular expression.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @param {module:api/Regex_entity_extractorsApi~controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityList}
     */
    this.controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve = function(instanceName, textInput, callback) {
      var postBody = textInput;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve");
      }

      // verify the required parameter 'textInput' is set
      if (textInput === undefined || textInput === null) {
        throw new Error("Missing the required parameter 'textInput' when calling controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve");
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
      var returnType = EntityList;

      return this.apiClient.callApi(
        '/regex_entity_extractors/{instance_name}/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));