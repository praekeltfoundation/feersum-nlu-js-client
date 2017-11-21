# FeersumNluApi.Faq_matchersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersFaqMatchersControllerFaqMatcherAddTrainingSamples**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherAddTrainingSamples) | **POST** /faq_matchers/{instance_name}/training_samples | Add training samples.
[**controllersFaqMatchersControllerFaqMatcherCreate**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherCreate) | **POST** /faq_matchers | Create an FAQ matcher.
[**controllersFaqMatchersControllerFaqMatcherCurate**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherCurate) | **POST** /faq_matchers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
[**controllersFaqMatchersControllerFaqMatcherDelTrainingSamples**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherDelTrainingSamples) | **DELETE** /faq_matchers/{instance_name}/training_samples | Delete training samples.
[**controllersFaqMatchersControllerFaqMatcherGetDetails**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetDetails) | **GET** /faq_matchers/{instance_name} | Get details of named instance.
[**controllersFaqMatchersControllerFaqMatcherGetDetailsAll**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetDetailsAll) | **GET** /faq_matchers | Get list of loaded FAQ matchers.
[**controllersFaqMatchersControllerFaqMatcherGetLabels**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetLabels) | **GET** /faq_matchers/{instance_name}/get_labels | Get list of possible labels.
[**controllersFaqMatchersControllerFaqMatcherGetTrainingSamples**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetTrainingSamples) | **GET** /faq_matchers/{instance_name}/training_samples | Get training samples.
[**controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples) | **POST** /faq_matchers/{instance_name}/online_training_samples | Train/update the classifier online with the samples provided.
[**controllersFaqMatchersControllerFaqMatcherRetrieve**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherRetrieve) | **POST** /faq_matchers/{instance_name}/retrieve | Match retrieve and FAQ.
[**controllersFaqMatchersControllerFaqMatcherTrain**](Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherTrain) | **POST** /faq_matchers/{instance_name}/train | Train the named FAQ matcher.


<a name="controllersFaqMatchersControllerFaqMatcherAddTrainingSamples"></a>
# **controllersFaqMatchersControllerFaqMatcherAddTrainingSamples**
> TotalSamples controllersFaqMatchersControllerFaqMatcherAddTrainingSamples(instanceName, labelledTextSampleList)

Add training samples.

Add training samples to named faq matcher. Returns the FAQ matcher&#39;s updated number of training samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var labelledTextSampleList = new FeersumNluApi.LabelledTextSampleList(); // LabelledTextSampleList | List of labelled text samples.

apiInstance.controllersFaqMatchersControllerFaqMatcherAddTrainingSamples(instanceName, labelledTextSampleList).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherCreate"></a>
# **controllersFaqMatchersControllerFaqMatcherCreate**
> InstanceDetail controllersFaqMatchersControllerFaqMatcherCreate(createDetails)

Create an FAQ matcher.

Create a new faq matcher or load one from the store. Returns the details of the new or loaded instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var createDetails = new FeersumNluApi.CreateDetails(); // CreateDetails | The details of the instance to create.

apiInstance.controllersFaqMatchersControllerFaqMatcherCreate(createDetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherCurate"></a>
# **controllersFaqMatchersControllerFaqMatcherCurate**
> LabelledTextSampleList controllersFaqMatchersControllerFaqMatcherCurate(instanceName, labelPair)

Endpoint to aid in the curation of a model instance.

Returns the list of samples behind a cell of the confusion matrix of the training or testing samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var labelPair = new FeersumNluApi.ClassLabelPair(); // ClassLabelPair | The true label, predicted label and matrix (train/test) to use.

apiInstance.controllersFaqMatchersControllerFaqMatcherCurate(instanceName, labelPair).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherDelTrainingSamples"></a>
# **controllersFaqMatchersControllerFaqMatcherDelTrainingSamples**
> LabelledTextSampleList controllersFaqMatchersControllerFaqMatcherDelTrainingSamples(instanceName)

Delete training samples.

Delete the training samples of the named FAQ matcher. Returns the deleted samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersFaqMatchersControllerFaqMatcherDelTrainingSamples(instanceName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherGetDetails"></a>
# **controllersFaqMatchersControllerFaqMatcherGetDetails**
> InstanceDetail controllersFaqMatchersControllerFaqMatcherGetDetails(instanceName)

Get details of named instance.

Get the details of the named FAQ matcher instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersFaqMatchersControllerFaqMatcherGetDetails(instanceName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherGetDetailsAll"></a>
# **controllersFaqMatchersControllerFaqMatcherGetDetailsAll**
> InstanceDetailList controllersFaqMatchersControllerFaqMatcherGetDetailsAll()

Get list of loaded FAQ matchers.

Returns the list of loaded faq matchers.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();
apiInstance.controllersFaqMatchersControllerFaqMatcherGetDetailsAll().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherGetLabels"></a>
# **controllersFaqMatchersControllerFaqMatcherGetLabels**
> ClassLabelList controllersFaqMatchersControllerFaqMatcherGetLabels(instanceName)

Get list of possible labels.

Returns the classifier&#39;s list of possible class labels.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersFaqMatchersControllerFaqMatcherGetLabels(instanceName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherGetTrainingSamples"></a>
# **controllersFaqMatchersControllerFaqMatcherGetTrainingSamples**
> LabelledTextSampleList controllersFaqMatchersControllerFaqMatcherGetTrainingSamples(instanceName)

Get training samples.

Returns the training samples of the named faq matcher.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersFaqMatchersControllerFaqMatcherGetTrainingSamples(instanceName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples"></a>
# **controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples**
> TotalSamples controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples(instanceName, labelledTextSampleList)

Train/update the classifier online with the samples provided.

Train/update the classifier online with the samples provided. This operation is more efficient than a full re-train. Returns the classifier&#39;s updated number of training samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var labelledTextSampleList = new FeersumNluApi.LabelledTextSampleList(); // LabelledTextSampleList | List of labelled text samples.

apiInstance.controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples(instanceName, labelledTextSampleList).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherRetrieve"></a>
# **controllersFaqMatchersControllerFaqMatcherRetrieve**
> ScoredLabelList controllersFaqMatchersControllerFaqMatcherRetrieve(instanceName, textInput)

Match retrieve and FAQ.

Matchers the FAQ and returns a probability sorted list of answer labels.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersFaqMatchersControllerFaqMatcherRetrieve(instanceName, textInput).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="controllersFaqMatchersControllerFaqMatcherTrain"></a>
# **controllersFaqMatchersControllerFaqMatcherTrain**
> InstanceDetail controllersFaqMatchersControllerFaqMatcherTrain(instanceName, trainDetails)

Train the named FAQ matcher.

Train the named FAQ matcher with the training and testing data already provided. Returns the updated instance detail.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Faq_matchersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var trainDetails = new FeersumNluApi.TrainDetails(); // TrainDetails | The arguments provided to the train operation.

apiInstance.controllersFaqMatchersControllerFaqMatcherTrain(instanceName, trainDetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

