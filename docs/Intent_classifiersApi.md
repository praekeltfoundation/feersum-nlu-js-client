# FeersumNluApi.Intent_classifiersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples) | **POST** /intent_classifiers/{instance_name}/training_samples | Add training samples.
[**controllersIntentClassifiersControllerIntentClassifierCreate**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierCreate) | **POST** /intent_classifiers | Create an intent classifier.
[**controllersIntentClassifiersControllerIntentClassifierCurate**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierCurate) | **POST** /intent_classifiers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
[**controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples) | **DELETE** /intent_classifiers/{instance_name}/training_samples | Delete training samples.
[**controllersIntentClassifiersControllerIntentClassifierGetDetails**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetDetails) | **GET** /intent_classifiers/{instance_name} | Get details of named instance.
[**controllersIntentClassifiersControllerIntentClassifierGetDetailsAll**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetDetailsAll) | **GET** /intent_classifiers | Get list of loaded intent classifiers.
[**controllersIntentClassifiersControllerIntentClassifierGetLabels**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetLabels) | **GET** /intent_classifiers/{instance_name}/get_labels | Get list of possible labels.
[**controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples) | **GET** /intent_classifiers/{instance_name}/training_samples | Get training samples.
[**controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples) | **POST** /intent_classifiers/{instance_name}/online_training_samples | Train/update the classifier online with the samples provided.
[**controllersIntentClassifiersControllerIntentClassifierRetrieve**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierRetrieve) | **POST** /intent_classifiers/{instance_name}/retrieve | Classify intent.
[**controllersIntentClassifiersControllerIntentClassifierTrain**](Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierTrain) | **POST** /intent_classifiers/{instance_name}/train | Train the named intent classifier.


<a name="controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples"></a>
# **controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples**
> TotalSamples controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples(instanceName, labelledTextSampleList)

Add training samples.

Add training samples to named intent classifier. Returns the classifier&#39;s updated number of training samples.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let labelledTextSampleList = new FeersumNluApi.LabelledTextSampleList(); // LabelledTextSampleList | List of labelled text samples.

apiInstance.controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples(instanceName, labelledTextSampleList).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **labelledTextSampleList** | [**LabelledTextSampleList**](LabelledTextSampleList.md)| List of labelled text samples. | 

### Return type

[**TotalSamples**](TotalSamples.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierCreate"></a>
# **controllersIntentClassifiersControllerIntentClassifierCreate**
> InstanceDetail controllersIntentClassifiersControllerIntentClassifierCreate(createDetails)

Create an intent classifier.

Create a new intent classifier or load one from the store. Returns the details of the new or loaded instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let createDetails = new FeersumNluApi.CreateDetails(); // CreateDetails | The details of the instance to create.

apiInstance.controllersIntentClassifiersControllerIntentClassifierCreate(createDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDetails** | [**CreateDetails**](CreateDetails.md)| The details of the instance to create. | 

### Return type

[**InstanceDetail**](InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierCurate"></a>
# **controllersIntentClassifiersControllerIntentClassifierCurate**
> LabelledTextSampleList controllersIntentClassifiersControllerIntentClassifierCurate(instanceName, labelPair)

Endpoint to aid in the curation of a model instance.

Returns the list of samples behind a cell of the confusion matrix of the training or testing samples.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let labelPair = new FeersumNluApi.ClassLabelPair(); // ClassLabelPair | The true label, predicted label and matrix (train/test) to use.

apiInstance.controllersIntentClassifiersControllerIntentClassifierCurate(instanceName, labelPair).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **labelPair** | [**ClassLabelPair**](ClassLabelPair.md)| The true label, predicted label and matrix (train/test) to use. | 

### Return type

[**LabelledTextSampleList**](LabelledTextSampleList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples"></a>
# **controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples**
> LabelledTextSampleList controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples(instanceName)

Delete training samples.

Delete the training samples of the named intent classifier. Returns the deleted samples.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples(instanceName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 

### Return type

[**LabelledTextSampleList**](LabelledTextSampleList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierGetDetails"></a>
# **controllersIntentClassifiersControllerIntentClassifierGetDetails**
> InstanceDetail controllersIntentClassifiersControllerIntentClassifierGetDetails(instanceName)

Get details of named instance.

Returns the details of the named intent classifier instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersIntentClassifiersControllerIntentClassifierGetDetails(instanceName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 

### Return type

[**InstanceDetail**](InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierGetDetailsAll"></a>
# **controllersIntentClassifiersControllerIntentClassifierGetDetailsAll**
> InstanceDetailList controllersIntentClassifiersControllerIntentClassifierGetDetailsAll()

Get list of loaded intent classifiers.

Returns the list of loaded intent classifiers.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();
apiInstance.controllersIntentClassifiersControllerIntentClassifierGetDetailsAll().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InstanceDetailList**](InstanceDetailList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierGetLabels"></a>
# **controllersIntentClassifiersControllerIntentClassifierGetLabels**
> ClassLabelList controllersIntentClassifiersControllerIntentClassifierGetLabels(instanceName)

Get list of possible labels.

Returns the classifier&#39;s list of possible class labels.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersIntentClassifiersControllerIntentClassifierGetLabels(instanceName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 

### Return type

[**ClassLabelList**](ClassLabelList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples"></a>
# **controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples**
> LabelledTextSampleList controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples(instanceName)

Get training samples.

Returns the training samples of the named intent classifier.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples(instanceName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 

### Return type

[**LabelledTextSampleList**](LabelledTextSampleList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples"></a>
# **controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples**
> TotalSamples controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples(instanceName, labelledTextSampleList)

Train/update the classifier online with the samples provided.

Train/update the classifier online with the samples provided. This operation is more efficient than a full re-train. Returns the classifier&#39;s updated number of training samples.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let labelledTextSampleList = new FeersumNluApi.LabelledTextSampleList(); // LabelledTextSampleList | List of labelled text samples.

apiInstance.controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples(instanceName, labelledTextSampleList).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **labelledTextSampleList** | [**LabelledTextSampleList**](LabelledTextSampleList.md)| List of labelled text samples. | 

### Return type

[**TotalSamples**](TotalSamples.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierRetrieve"></a>
# **controllersIntentClassifiersControllerIntentClassifierRetrieve**
> ScoredLabelList controllersIntentClassifiersControllerIntentClassifierRetrieve(instanceName, textInput)

Classify intent.

Classifies the intent and returns a probability sorted list of classes.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersIntentClassifiersControllerIntentClassifierRetrieve(instanceName, textInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **textInput** | [**TextInput**](TextInput.md)| The input text. | 

### Return type

[**ScoredLabelList**](ScoredLabelList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersIntentClassifiersControllerIntentClassifierTrain"></a>
# **controllersIntentClassifiersControllerIntentClassifierTrain**
> InstanceDetail controllersIntentClassifiersControllerIntentClassifierTrain(instanceName, trainDetails)

Train the named intent classifier.

Train the named intent classifier with the training and testing data already provided. Returns the updated instance details.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Intent_classifiersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let trainDetails = new FeersumNluApi.TrainDetails(); // TrainDetails | The arguments provided to the train operation.

apiInstance.controllersIntentClassifiersControllerIntentClassifierTrain(instanceName, trainDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **trainDetails** | [**TrainDetails**](TrainDetails.md)| The arguments provided to the train operation. | 

### Return type

[**InstanceDetail**](InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

