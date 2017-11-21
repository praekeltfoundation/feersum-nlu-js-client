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
    define(['ApiClient', 'model/ClassLabelList', 'model/ClassLabelPair', 'model/CreateDetails', 'model/InstanceDetail', 'model/InstanceDetailList', 'model/LabelledTextSampleList', 'model/ScoredLabelList', 'model/TextInput', 'model/TotalSamples', 'model/TrainDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClassLabelList'), require('../model/ClassLabelPair'), require('../model/CreateDetails'), require('../model/InstanceDetail'), require('../model/InstanceDetailList'), require('../model/LabelledTextSampleList'), require('../model/ScoredLabelList'), require('../model/TextInput'), require('../model/TotalSamples'), require('../model/TrainDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.Intent_classifiersApi = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.ClassLabelList, root.FeersumNluApi.ClassLabelPair, root.FeersumNluApi.CreateDetails, root.FeersumNluApi.InstanceDetail, root.FeersumNluApi.InstanceDetailList, root.FeersumNluApi.LabelledTextSampleList, root.FeersumNluApi.ScoredLabelList, root.FeersumNluApi.TextInput, root.FeersumNluApi.TotalSamples, root.FeersumNluApi.TrainDetails);
  }
}(this, function(ApiClient, ClassLabelList, ClassLabelPair, CreateDetails, InstanceDetail, InstanceDetailList, LabelledTextSampleList, ScoredLabelList, TextInput, TotalSamples, TrainDetails) {
  'use strict';

  /**
   * Intent_classifiers service.
   * @module api/Intent_classifiersApi
   * @version 2.0.3
   */

  /**
   * Constructs a new Intent_classifiersApi. 
   * @alias module:api/Intent_classifiersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add training samples.
     * Add training samples to named intent classifier. Returns the classifier&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalSamples} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierAddTrainingSamplesWithHttpInfo = function(instanceName, labelledTextSampleList) {
      var postBody = labelledTextSampleList;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples");
      }

      // verify the required parameter 'labelledTextSampleList' is set
      if (labelledTextSampleList === undefined || labelledTextSampleList === null) {
        throw new Error("Missing the required parameter 'labelledTextSampleList' when calling controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples");
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
      var returnType = TotalSamples;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/training_samples', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add training samples.
     * Add training samples to named intent classifier. Returns the classifier&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalSamples}
     */
    this.controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples = function(instanceName, labelledTextSampleList) {
      return this.controllersIntentClassifiersControllerIntentClassifierAddTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an intent classifier.
     * Create a new intent classifier or load one from the store. Returns the details of the new or loaded instance.
     * @param {module:model/CreateDetails} createDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierCreateWithHttpInfo = function(createDetails) {
      var postBody = createDetails;

      // verify the required parameter 'createDetails' is set
      if (createDetails === undefined || createDetails === null) {
        throw new Error("Missing the required parameter 'createDetails' when calling controllersIntentClassifiersControllerIntentClassifierCreate");
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
      var returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/intent_classifiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an intent classifier.
     * Create a new intent classifier or load one from the store. Returns the details of the new or loaded instance.
     * @param {module:model/CreateDetails} createDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    this.controllersIntentClassifiersControllerIntentClassifierCreate = function(createDetails) {
      return this.controllersIntentClassifiersControllerIntentClassifierCreateWithHttpInfo(createDetails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Endpoint to aid in the curation of a model instance.
     * Returns the list of samples behind a cell of the confusion matrix of the training or testing samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/ClassLabelPair} labelPair The true label, predicted label and matrix (train/test) to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelledTextSampleList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierCurateWithHttpInfo = function(instanceName, labelPair) {
      var postBody = labelPair;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierCurate");
      }

      // verify the required parameter 'labelPair' is set
      if (labelPair === undefined || labelPair === null) {
        throw new Error("Missing the required parameter 'labelPair' when calling controllersIntentClassifiersControllerIntentClassifierCurate");
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
      var returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/curate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Endpoint to aid in the curation of a model instance.
     * Returns the list of samples behind a cell of the confusion matrix of the training or testing samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/ClassLabelPair} labelPair The true label, predicted label and matrix (train/test) to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelledTextSampleList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierCurate = function(instanceName, labelPair) {
      return this.controllersIntentClassifiersControllerIntentClassifierCurateWithHttpInfo(instanceName, labelPair)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete training samples.
     * Delete the training samples of the named intent classifier. Returns the deleted samples.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelledTextSampleList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierDelTrainingSamplesWithHttpInfo = function(instanceName) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples");
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
      var returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/training_samples', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete training samples.
     * Delete the training samples of the named intent classifier. Returns the deleted samples.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelledTextSampleList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples = function(instanceName) {
      return this.controllersIntentClassifiersControllerIntentClassifierDelTrainingSamplesWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details of named instance.
     * Returns the details of the named intent classifier instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetDetailsWithHttpInfo = function(instanceName) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierGetDetails");
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
      var returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details of named instance.
     * Returns the details of the named intent classifier instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetDetails = function(instanceName) {
      return this.controllersIntentClassifiersControllerIntentClassifierGetDetailsWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of loaded intent classifiers.
     * Returns the list of loaded intent classifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetailList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetDetailsAllWithHttpInfo = function() {
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
      var returnType = InstanceDetailList;

      return this.apiClient.callApi(
        '/intent_classifiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of loaded intent classifiers.
     * Returns the list of loaded intent classifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetailList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetDetailsAll = function() {
      return this.controllersIntentClassifiersControllerIntentClassifierGetDetailsAllWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of possible labels.
     * Returns the classifier&#39;s list of possible class labels.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClassLabelList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetLabelsWithHttpInfo = function(instanceName) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierGetLabels");
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
        '/intent_classifiers/{instance_name}/get_labels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of possible labels.
     * Returns the classifier&#39;s list of possible class labels.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClassLabelList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetLabels = function(instanceName) {
      return this.controllersIntentClassifiersControllerIntentClassifierGetLabelsWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get training samples.
     * Returns the training samples of the named intent classifier.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelledTextSampleList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetTrainingSamplesWithHttpInfo = function(instanceName) {
      var postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples");
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
      var returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/training_samples', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get training samples.
     * Returns the training samples of the named intent classifier.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelledTextSampleList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples = function(instanceName) {
      return this.controllersIntentClassifiersControllerIntentClassifierGetTrainingSamplesWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Train/update the classifier online with the samples provided.
     * Train/update the classifier online with the samples provided. This operation is more efficient than a full re-train. Returns the classifier&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalSamples} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamplesWithHttpInfo = function(instanceName, labelledTextSampleList) {
      var postBody = labelledTextSampleList;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples");
      }

      // verify the required parameter 'labelledTextSampleList' is set
      if (labelledTextSampleList === undefined || labelledTextSampleList === null) {
        throw new Error("Missing the required parameter 'labelledTextSampleList' when calling controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples");
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
      var returnType = TotalSamples;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/online_training_samples', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Train/update the classifier online with the samples provided.
     * Train/update the classifier online with the samples provided. This operation is more efficient than a full re-train. Returns the classifier&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalSamples}
     */
    this.controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples = function(instanceName, labelledTextSampleList) {
      return this.controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Classify intent.
     * Classifies the intent and returns a probability sorted list of classes.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScoredLabelList} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierRetrieveWithHttpInfo = function(instanceName, textInput) {
      var postBody = textInput;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierRetrieve");
      }

      // verify the required parameter 'textInput' is set
      if (textInput === undefined || textInput === null) {
        throw new Error("Missing the required parameter 'textInput' when calling controllersIntentClassifiersControllerIntentClassifierRetrieve");
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
        '/intent_classifiers/{instance_name}/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Classify intent.
     * Classifies the intent and returns a probability sorted list of classes.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScoredLabelList}
     */
    this.controllersIntentClassifiersControllerIntentClassifierRetrieve = function(instanceName, textInput) {
      return this.controllersIntentClassifiersControllerIntentClassifierRetrieveWithHttpInfo(instanceName, textInput)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Train the named intent classifier.
     * Train the named intent classifier with the training and testing data already provided. Returns the updated instance details.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TrainDetails} trainDetails The arguments provided to the train operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    this.controllersIntentClassifiersControllerIntentClassifierTrainWithHttpInfo = function(instanceName, trainDetails) {
      var postBody = trainDetails;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersIntentClassifiersControllerIntentClassifierTrain");
      }

      // verify the required parameter 'trainDetails' is set
      if (trainDetails === undefined || trainDetails === null) {
        throw new Error("Missing the required parameter 'trainDetails' when calling controllersIntentClassifiersControllerIntentClassifierTrain");
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
      var returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/intent_classifiers/{instance_name}/train', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Train the named intent classifier.
     * Train the named intent classifier with the training and testing data already provided. Returns the updated instance details.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TrainDetails} trainDetails The arguments provided to the train operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    this.controllersIntentClassifiersControllerIntentClassifierTrain = function(instanceName, trainDetails) {
      return this.controllersIntentClassifiersControllerIntentClassifierTrainWithHttpInfo(instanceName, trainDetails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
