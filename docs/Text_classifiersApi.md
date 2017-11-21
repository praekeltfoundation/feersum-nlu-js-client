# FeersumNluApi.Text_classifiersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersTextClassifiersControllerTextClassifierAddTrainingSamples**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierAddTrainingSamples) | **POST** /text_classifiers/{instance_name}/training_samples | Add training samples.
[**controllersTextClassifiersControllerTextClassifierCreate**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierCreate) | **POST** /text_classifiers | Create a text classifier.
[**controllersTextClassifiersControllerTextClassifierCurate**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierCurate) | **POST** /text_classifiers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
[**controllersTextClassifiersControllerTextClassifierDelTrainingSamples**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierDelTrainingSamples) | **DELETE** /text_classifiers/{instance_name}/training_samples | Delete training samples.
[**controllersTextClassifiersControllerTextClassifierGetDetails**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetDetails) | **GET** /text_classifiers/{instance_name} | Get details of named instance.
[**controllersTextClassifiersControllerTextClassifierGetDetailsAll**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetDetailsAll) | **GET** /text_classifiers | Get list of loaded text classifiers.
[**controllersTextClassifiersControllerTextClassifierGetLabels**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetLabels) | **GET** /text_classifiers/{instance_name}/get_labels | Get list of possible labels.
[**controllersTextClassifiersControllerTextClassifierGetTrainingSamples**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetTrainingSamples) | **GET** /text_classifiers/{instance_name}/training_samples | Get training samples.
[**controllersTextClassifiersControllerTextClassifierRetrieve**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierRetrieve) | **POST** /text_classifiers/{instance_name}/retrieve | Classify text.
[**controllersTextClassifiersControllerTextClassifierTrain**](Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierTrain) | **POST** /text_classifiers/{instance_name}/train | Train the named text classifier.


<a name="controllersTextClassifiersControllerTextClassifierAddTrainingSamples"></a>
# **controllersTextClassifiersControllerTextClassifierAddTrainingSamples**
> TotalSamples controllersTextClassifiersControllerTextClassifierAddTrainingSamples(instanceName, labelledTextSampleList)

Add training samples.

Add training samples to named text classifier. Returns the classifier&#39;s updated number of training samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var labelledTextSampleList = new FeersumNluApi.LabelledTextSampleList(); // LabelledTextSampleList | List of labelled text samples.

apiInstance.controllersTextClassifiersControllerTextClassifierAddTrainingSamples(instanceName, labelledTextSampleList).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierCreate"></a>
# **controllersTextClassifiersControllerTextClassifierCreate**
> InstanceDetail controllersTextClassifiersControllerTextClassifierCreate(createDetails)

Create a text classifier.

Create a new text classifier or load one from the store. Returns the details of the new or loaded instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var createDetails = new FeersumNluApi.CreateDetails(); // CreateDetails | The details of the instance to create.

apiInstance.controllersTextClassifiersControllerTextClassifierCreate(createDetails).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierCurate"></a>
# **controllersTextClassifiersControllerTextClassifierCurate**
> LabelledTextSampleList controllersTextClassifiersControllerTextClassifierCurate(instanceName, labelPair)

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

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var labelPair = new FeersumNluApi.ClassLabelPair(); // ClassLabelPair | The true label, predicted label and matrix (train/test) to use.

apiInstance.controllersTextClassifiersControllerTextClassifierCurate(instanceName, labelPair).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierDelTrainingSamples"></a>
# **controllersTextClassifiersControllerTextClassifierDelTrainingSamples**
> LabelledTextSampleList controllersTextClassifiersControllerTextClassifierDelTrainingSamples(instanceName)

Delete training samples.

Delete the training samples of the named text classifier. Returns the deleted samples.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersTextClassifiersControllerTextClassifierDelTrainingSamples(instanceName).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierGetDetails"></a>
# **controllersTextClassifiersControllerTextClassifierGetDetails**
> InstanceDetail controllersTextClassifiersControllerTextClassifierGetDetails(instanceName)

Get details of named instance.

Get the details of the named text classifier instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersTextClassifiersControllerTextClassifierGetDetails(instanceName).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierGetDetailsAll"></a>
# **controllersTextClassifiersControllerTextClassifierGetDetailsAll**
> InstanceDetailList controllersTextClassifiersControllerTextClassifierGetDetailsAll()

Get list of loaded text classifiers.

Get the list of loaded text classifiers.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();
apiInstance.controllersTextClassifiersControllerTextClassifierGetDetailsAll().then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierGetLabels"></a>
# **controllersTextClassifiersControllerTextClassifierGetLabels**
> ClassLabelList controllersTextClassifiersControllerTextClassifierGetLabels(instanceName)

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

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersTextClassifiersControllerTextClassifierGetLabels(instanceName).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierGetTrainingSamples"></a>
# **controllersTextClassifiersControllerTextClassifierGetTrainingSamples**
> LabelledTextSampleList controllersTextClassifiersControllerTextClassifierGetTrainingSamples(instanceName)

Get training samples.

Get the training samples of the named text classifier.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersTextClassifiersControllerTextClassifierGetTrainingSamples(instanceName).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierRetrieve"></a>
# **controllersTextClassifiersControllerTextClassifierRetrieve**
> ScoredLabelList controllersTextClassifiersControllerTextClassifierRetrieve(instanceName, textInput)

Classify text.

Classifies the text and returns a probability sorted list of classes.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersTextClassifiersControllerTextClassifierRetrieve(instanceName, textInput).then(function(data) {
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

<a name="controllersTextClassifiersControllerTextClassifierTrain"></a>
# **controllersTextClassifiersControllerTextClassifierTrain**
> InstanceDetail controllersTextClassifiersControllerTextClassifierTrain(instanceName, trainDetails)

Train the named text classifier.

Train the named text classifier with the training and testing data already provided. Returns the details of the model instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Text_classifiersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var trainDetails = new FeersumNluApi.TrainDetails(); // TrainDetails | The arguments provided to the train operation.

apiInstance.controllersTextClassifiersControllerTextClassifierTrain(instanceName, trainDetails).then(function(data) {
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

