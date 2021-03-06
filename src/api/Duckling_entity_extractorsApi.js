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
    define(['ApiClient', 'model/DucklingEntCreateDetails', 'model/DucklingInstanceDetail', 'model/DucklingInstanceDetailList', 'model/EntityList', 'model/TextInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DucklingEntCreateDetails'), require('../model/DucklingInstanceDetail'), require('../model/DucklingInstanceDetailList'), require('../model/EntityList'), require('../model/TextInput'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.Duckling_entity_extractorsApi = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.DucklingEntCreateDetails, root.FeersumNluApi.DucklingInstanceDetail, root.FeersumNluApi.DucklingInstanceDetailList, root.FeersumNluApi.EntityList, root.FeersumNluApi.TextInput);
  }
}(this, function(ApiClient, DucklingEntCreateDetails, DucklingInstanceDetail, DucklingInstanceDetailList, EntityList, TextInput) {
  'use strict';

  /**
   * Duckling_entity_extractors service.
   * @module api/Duckling_entity_extractorsApi
   * @version 2.0.3
   */

  /**
   * Constructs a new Duckling_entity_extractorsApi. 
   * @alias module:api/Duckling_entity_extractorsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a duckling entity extractor.
     * Create a new duckling entity extractor or load one from the store.
     * @param {module:model/DucklingEntCreateDetails} ducklingEntCreateDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DucklingInstanceDetail} and HTTP response
     */
    this.ducklingEntityExtractorCreateWithHttpInfo = function(ducklingEntCreateDetails) {
      var postBody = ducklingEntCreateDetails;

      // verify the required parameter 'ducklingEntCreateDetails' is set
      if (ducklingEntCreateDetails === undefined || ducklingEntCreateDetails === null) {
        throw new Error("Missing the required parameter 'ducklingEntCreateDetails' when calling ducklingEntityExtractorCreate");
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
      var returnType = DucklingInstanceDetail;

      return this.apiClient.callApi(
        '/duckling_entity_extractors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a duckling entity extractor.
     * Create a new duckling entity extractor or load one from the store.
     * @param {module:model/DucklingEntCreateDetails} ducklingEntCreateDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DucklingInstanceDetail}
     */
    this.ducklingEntityExtractorCreate = function(ducklingEntCreateDetails) {
      return this.ducklingEntityExtractorCreateWithHttpInfo(ducklingEntCreateDetails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details of named instance.
     * Get the details of the named duckling entity extractor instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DucklingInstanceDetail} and HTTP response
     */
    this.ducklingEntityExtractorGetDetailsWithHttpInfo = function(instanceName) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling ducklingEntityExtractorGetDetails");
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
      var returnType = DucklingInstanceDetail;

      return this.apiClient.callApi(
        '/duckling_entity_extractors/{instance_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details of named instance.
     * Get the details of the named duckling entity extractor instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DucklingInstanceDetail}
     */
    this.ducklingEntityExtractorGetDetails = function(instanceName) {
      return this.ducklingEntityExtractorGetDetailsWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of loaded regular expression entity extractors.
     * Get the list of loaded duckling entity extractors.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DucklingInstanceDetailList} and HTTP response
     */
    this.ducklingEntityExtractorGetDetailsAllWithHttpInfo = function() {
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
      var returnType = DucklingInstanceDetailList;

      return this.apiClient.callApi(
        '/duckling_entity_extractors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of loaded regular expression entity extractors.
     * Get the list of loaded duckling entity extractors.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DucklingInstanceDetailList}
     */
    this.ducklingEntityExtractorGetDetailsAll = function() {
      return this.ducklingEntityExtractorGetDetailsAllWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Extract information based on the regular expression.
     * Extract the entities parsed by duckling.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityList} and HTTP response
     */
    this.ducklingEntityExtractorRetrieveWithHttpInfo = function(instanceName, textInput) {
      var postBody = textInput;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling ducklingEntityExtractorRetrieve");
      }

      // verify the required parameter 'textInput' is set
      if (textInput === undefined || textInput === null) {
        throw new Error("Missing the required parameter 'textInput' when calling ducklingEntityExtractorRetrieve");
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
        '/duckling_entity_extractors/{instance_name}/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Extract information based on the regular expression.
     * Extract the entities parsed by duckling.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityList}
     */
    this.ducklingEntityExtractorRetrieve = function(instanceName, textInput) {
      return this.ducklingEntityExtractorRetrieveWithHttpInfo(instanceName, textInput)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
