# FeersumNluApi.Faq_matchersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faqMatcherAddTrainingSamples**](Faq_matchersApi.md#faqMatcherAddTrainingSamples) | **POST** /faq_matchers/{instance_name}/training_samples | Add training samples.
[**faqMatcherCreate**](Faq_matchersApi.md#faqMatcherCreate) | **POST** /faq_matchers | Create an FAQ matcher.
[**faqMatcherCurate**](Faq_matchersApi.md#faqMatcherCurate) | **POST** /faq_matchers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
[**faqMatcherDelTrainingSamples**](Faq_matchersApi.md#faqMatcherDelTrainingSamples) | **DELETE** /faq_matchers/{instance_name}/training_samples | Delete training samples.
[**faqMatcherGetDetails**](Faq_matchersApi.md#faqMatcherGetDetails) | **GET** /faq_matchers/{instance_name} | Get details of named instance.
[**faqMatcherGetDetailsAll**](Faq_matchersApi.md#faqMatcherGetDetailsAll) | **GET** /faq_matchers | Get list of loaded FAQ matchers.
[**faqMatcherGetLabels**](Faq_matchersApi.md#faqMatcherGetLabels) | **GET** /faq_matchers/{instance_name}/get_labels | Get list of possible labels.
[**faqMatcherGetTrainingSamples**](Faq_matchersApi.md#faqMatcherGetTrainingSamples) | **GET** /faq_matchers/{instance_name}/training_samples | Get training samples.
[**faqMatcherOnlineTrainingSamples**](Faq_matchersApi.md#faqMatcherOnlineTrainingSamples) | **POST** /faq_matchers/{instance_name}/online_training_samples | Train/update the classifier online with the samples provided.
[**faqMatcherRetrieve**](Faq_matchersApi.md#faqMatcherRetrieve) | **POST** /faq_matchers/{instance_name}/retrieve | Match retrieve and FAQ.
[**faqMatcherTrain**](Faq_matchersApi.md#faqMatcherTrain) | **POST** /faq_matchers/{instance_name}/train | Train the named FAQ matcher.


<a name="faqMatcherAddTrainingSamples"></a>
# **faqMatcherAddTrainingSamples**
> TotalSamples faqMatcherAddTrainingSamples(instanceName, labelledTextSampleList)

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

apiInstance.faqMatcherAddTrainingSamples(instanceName, labelledTextSampleList).then(function(data) {
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

<a name="faqMatcherCreate"></a>
# **faqMatcherCreate**
> InstanceDetail faqMatcherCreate(createDetails)

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

apiInstance.faqMatcherCreate(createDetails).then(function(data) {
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

<a name="faqMatcherCurate"></a>
# **faqMatcherCurate**
> LabelledTextSampleList faqMatcherCurate(instanceName, labelPair)

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

apiInstance.faqMatcherCurate(instanceName, labelPair).then(function(data) {
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

<a name="faqMatcherDelTrainingSamples"></a>
# **faqMatcherDelTrainingSamples**
> LabelledTextSampleList faqMatcherDelTrainingSamples(instanceName)

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

apiInstance.faqMatcherDelTrainingSamples(instanceName).then(function(data) {
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

<a name="faqMatcherGetDetails"></a>
# **faqMatcherGetDetails**
> InstanceDetail faqMatcherGetDetails(instanceName)

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

apiInstance.faqMatcherGetDetails(instanceName).then(function(data) {
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

<a name="faqMatcherGetDetailsAll"></a>
# **faqMatcherGetDetailsAll**
> InstanceDetailList faqMatcherGetDetailsAll()

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
apiInstance.faqMatcherGetDetailsAll().then(function(data) {
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

<a name="faqMatcherGetLabels"></a>
# **faqMatcherGetLabels**
> ClassLabelList faqMatcherGetLabels(instanceName)

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

apiInstance.faqMatcherGetLabels(instanceName).then(function(data) {
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

<a name="faqMatcherGetTrainingSamples"></a>
# **faqMatcherGetTrainingSamples**
> LabelledTextSampleList faqMatcherGetTrainingSamples(instanceName)

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

apiInstance.faqMatcherGetTrainingSamples(instanceName).then(function(data) {
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

<a name="faqMatcherOnlineTrainingSamples"></a>
# **faqMatcherOnlineTrainingSamples**
> TotalSamples faqMatcherOnlineTrainingSamples(instanceName, labelledTextSampleList)

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

apiInstance.faqMatcherOnlineTrainingSamples(instanceName, labelledTextSampleList).then(function(data) {
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

<a name="faqMatcherRetrieve"></a>
# **faqMatcherRetrieve**
> ScoredLabelList faqMatcherRetrieve(instanceName, textInput)

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

apiInstance.faqMatcherRetrieve(instanceName, textInput).then(function(data) {
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

<a name="faqMatcherTrain"></a>
# **faqMatcherTrain**
> InstanceDetail faqMatcherTrain(instanceName, trainDetails)

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

apiInstance.faqMatcherTrain(instanceName, trainDetails).then(function(data) {
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

