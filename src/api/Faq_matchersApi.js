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


import ApiClient from "../ApiClient";
import ClassLabelList from '../model/ClassLabelList';
import ClassLabelPair from '../model/ClassLabelPair';
import CreateDetails from '../model/CreateDetails';
import InstanceDetail from '../model/InstanceDetail';
import InstanceDetailList from '../model/InstanceDetailList';
import LabelledTextSampleList from '../model/LabelledTextSampleList';
import ScoredLabelList from '../model/ScoredLabelList';
import TextInput from '../model/TextInput';
import TotalSamples from '../model/TotalSamples';
import TrainDetails from '../model/TrainDetails';

/**
* Faq_matchers service.
* @module api/Faq_matchersApi
* @version 2.0.3
*/
export default class Faq_matchersApi {

    /**
    * Constructs a new Faq_matchersApi. 
    * @alias module:api/Faq_matchersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add training samples.
     * Add training samples to named faq matcher. Returns the FAQ matcher&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalSamples} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherAddTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList) {
      let postBody = labelledTextSampleList;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherAddTrainingSamples");
      }

      // verify the required parameter 'labelledTextSampleList' is set
      if (labelledTextSampleList === undefined || labelledTextSampleList === null) {
        throw new Error("Missing the required parameter 'labelledTextSampleList' when calling controllersFaqMatchersControllerFaqMatcherAddTrainingSamples");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TotalSamples;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/training_samples', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add training samples.
     * Add training samples to named faq matcher. Returns the FAQ matcher&#39;s updated number of training samples.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/LabelledTextSampleList} labelledTextSampleList List of labelled text samples.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalSamples}
     */
    controllersFaqMatchersControllerFaqMatcherAddTrainingSamples(instanceName, labelledTextSampleList) {
      return this.controllersFaqMatchersControllerFaqMatcherAddTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an FAQ matcher.
     * Create a new faq matcher or load one from the store. Returns the details of the new or loaded instance.
     * @param {module:model/CreateDetails} createDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherCreateWithHttpInfo(createDetails) {
      let postBody = createDetails;

      // verify the required parameter 'createDetails' is set
      if (createDetails === undefined || createDetails === null) {
        throw new Error("Missing the required parameter 'createDetails' when calling controllersFaqMatchersControllerFaqMatcherCreate");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/faq_matchers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an FAQ matcher.
     * Create a new faq matcher or load one from the store. Returns the details of the new or loaded instance.
     * @param {module:model/CreateDetails} createDetails The details of the instance to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    controllersFaqMatchersControllerFaqMatcherCreate(createDetails) {
      return this.controllersFaqMatchersControllerFaqMatcherCreateWithHttpInfo(createDetails)
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
    controllersFaqMatchersControllerFaqMatcherCurateWithHttpInfo(instanceName, labelPair) {
      let postBody = labelPair;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherCurate");
      }

      // verify the required parameter 'labelPair' is set
      if (labelPair === undefined || labelPair === null) {
        throw new Error("Missing the required parameter 'labelPair' when calling controllersFaqMatchersControllerFaqMatcherCurate");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/curate', 'POST',
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
    controllersFaqMatchersControllerFaqMatcherCurate(instanceName, labelPair) {
      return this.controllersFaqMatchersControllerFaqMatcherCurateWithHttpInfo(instanceName, labelPair)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete training samples.
     * Delete the training samples of the named FAQ matcher. Returns the deleted samples.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelledTextSampleList} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherDelTrainingSamplesWithHttpInfo(instanceName) {
      let postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherDelTrainingSamples");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/training_samples', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete training samples.
     * Delete the training samples of the named FAQ matcher. Returns the deleted samples.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelledTextSampleList}
     */
    controllersFaqMatchersControllerFaqMatcherDelTrainingSamples(instanceName) {
      return this.controllersFaqMatchersControllerFaqMatcherDelTrainingSamplesWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details of named instance.
     * Get the details of the named FAQ matcher instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherGetDetailsWithHttpInfo(instanceName) {
      let postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherGetDetails");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details of named instance.
     * Get the details of the named FAQ matcher instance.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    controllersFaqMatchersControllerFaqMatcherGetDetails(instanceName) {
      return this.controllersFaqMatchersControllerFaqMatcherGetDetailsWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of loaded FAQ matchers.
     * Returns the list of loaded faq matchers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetailList} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherGetDetailsAllWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InstanceDetailList;

      return this.apiClient.callApi(
        '/faq_matchers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of loaded FAQ matchers.
     * Returns the list of loaded faq matchers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetailList}
     */
    controllersFaqMatchersControllerFaqMatcherGetDetailsAll() {
      return this.controllersFaqMatchersControllerFaqMatcherGetDetailsAllWithHttpInfo()
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
    controllersFaqMatchersControllerFaqMatcherGetLabelsWithHttpInfo(instanceName) {
      let postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherGetLabels");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ClassLabelList;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/get_labels', 'GET',
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
    controllersFaqMatchersControllerFaqMatcherGetLabels(instanceName) {
      return this.controllersFaqMatchersControllerFaqMatcherGetLabelsWithHttpInfo(instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get training samples.
     * Returns the training samples of the named faq matcher.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelledTextSampleList} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherGetTrainingSamplesWithHttpInfo(instanceName) {
      let postBody = null;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherGetTrainingSamples");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LabelledTextSampleList;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/training_samples', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get training samples.
     * Returns the training samples of the named faq matcher.
     * @param {String} instanceName The name of the model instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelledTextSampleList}
     */
    controllersFaqMatchersControllerFaqMatcherGetTrainingSamples(instanceName) {
      return this.controllersFaqMatchersControllerFaqMatcherGetTrainingSamplesWithHttpInfo(instanceName)
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
    controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList) {
      let postBody = labelledTextSampleList;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples");
      }

      // verify the required parameter 'labelledTextSampleList' is set
      if (labelledTextSampleList === undefined || labelledTextSampleList === null) {
        throw new Error("Missing the required parameter 'labelledTextSampleList' when calling controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TotalSamples;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/online_training_samples', 'POST',
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
    controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples(instanceName, labelledTextSampleList) {
      return this.controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamplesWithHttpInfo(instanceName, labelledTextSampleList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Match retrieve and FAQ.
     * Matchers the FAQ and returns a probability sorted list of answer labels.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScoredLabelList} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherRetrieveWithHttpInfo(instanceName, textInput) {
      let postBody = textInput;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherRetrieve");
      }

      // verify the required parameter 'textInput' is set
      if (textInput === undefined || textInput === null) {
        throw new Error("Missing the required parameter 'textInput' when calling controllersFaqMatchersControllerFaqMatcherRetrieve");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScoredLabelList;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Match retrieve and FAQ.
     * Matchers the FAQ and returns a probability sorted list of answer labels.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TextInput} textInput The input text.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScoredLabelList}
     */
    controllersFaqMatchersControllerFaqMatcherRetrieve(instanceName, textInput) {
      return this.controllersFaqMatchersControllerFaqMatcherRetrieveWithHttpInfo(instanceName, textInput)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Train the named FAQ matcher.
     * Train the named FAQ matcher with the training and testing data already provided. Returns the updated instance detail.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TrainDetails} trainDetails The arguments provided to the train operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstanceDetail} and HTTP response
     */
    controllersFaqMatchersControllerFaqMatcherTrainWithHttpInfo(instanceName, trainDetails) {
      let postBody = trainDetails;

      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling controllersFaqMatchersControllerFaqMatcherTrain");
      }

      // verify the required parameter 'trainDetails' is set
      if (trainDetails === undefined || trainDetails === null) {
        throw new Error("Missing the required parameter 'trainDetails' when calling controllersFaqMatchersControllerFaqMatcherTrain");
      }


      let pathParams = {
        'instance_name': instanceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InstanceDetail;

      return this.apiClient.callApi(
        '/faq_matchers/{instance_name}/train', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Train the named FAQ matcher.
     * Train the named FAQ matcher with the training and testing data already provided. Returns the updated instance detail.
     * @param {String} instanceName The name of the model instance.
     * @param {module:model/TrainDetails} trainDetails The arguments provided to the train operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstanceDetail}
     */
    controllersFaqMatchersControllerFaqMatcherTrain(instanceName, trainDetails) {
      return this.controllersFaqMatchersControllerFaqMatcherTrainWithHttpInfo(instanceName, trainDetails)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
