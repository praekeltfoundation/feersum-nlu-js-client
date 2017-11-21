# FeersumNluApi.Lr4_language_recognisersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lr4LanguageRecogniserCreate**](Lr4_language_recognisersApi.md#lr4LanguageRecogniserCreate) | **POST** /lr4_language_recognisers | Create a LR4 text language detector.
[**lr4LanguageRecogniserGetDetails**](Lr4_language_recognisersApi.md#lr4LanguageRecogniserGetDetails) | **GET** /lr4_language_recognisers/{instance_name} | Get details of named instance.
[**lr4LanguageRecogniserGetDetailsAll**](Lr4_language_recognisersApi.md#lr4LanguageRecogniserGetDetailsAll) | **GET** /lr4_language_recognisers | Get list of loaded LR4 text language detectors.
[**lr4LanguageRecogniserGetLabels**](Lr4_language_recognisersApi.md#lr4LanguageRecogniserGetLabels) | **GET** /lr4_language_recognisers/{instance_name}/get_labels | Get list of possible labels.
[**lr4LanguageRecogniserRetrieve**](Lr4_language_recognisersApi.md#lr4LanguageRecogniserRetrieve) | **POST** /lr4_language_recognisers/{instance_name}/retrieve | Recognise the language the text is written in.


<a name="lr4LanguageRecogniserCreate"></a>
# **lr4LanguageRecogniserCreate**
> Lr4InstanceDetail lr4LanguageRecogniserCreate(lr4CreateDetails)

Create a LR4 text language detector.

Create a new LR4 language detector from the pre-trained model name provided. &#39;lid_za&#39; is currently the only pre-trained model that is available, but it was trained on all 11 languages and is pretty accurate. Returns the detail of the new instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

var lr4CreateDetails = new FeersumNluApi.Lr4CreateDetails(); // Lr4CreateDetails | The details of the instance to create.

apiInstance.lr4LanguageRecogniserCreate(lr4CreateDetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lr4CreateDetails** | [**Lr4CreateDetails**](Lr4CreateDetails.md)| The details of the instance to create. | 

### Return type

[**Lr4InstanceDetail**](Lr4InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lr4LanguageRecogniserGetDetails"></a>
# **lr4LanguageRecogniserGetDetails**
> Lr4InstanceDetail lr4LanguageRecogniserGetDetails(instanceName)

Get details of named instance.

Get the details of the named LR4 text language detector instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.lr4LanguageRecogniserGetDetails(instanceName).then(function(data) {
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

[**Lr4InstanceDetail**](Lr4InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lr4LanguageRecogniserGetDetailsAll"></a>
# **lr4LanguageRecogniserGetDetailsAll**
> Lr4InstanceDetailList lr4LanguageRecogniserGetDetailsAll()

Get list of loaded LR4 text language detectors.

Get the list of loaded LR4 text language detectors.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();
apiInstance.lr4LanguageRecogniserGetDetailsAll().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Lr4InstanceDetailList**](Lr4InstanceDetailList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lr4LanguageRecogniserGetLabels"></a>
# **lr4LanguageRecogniserGetLabels**
> ClassLabelList lr4LanguageRecogniserGetLabels(instanceName)

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

var apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.lr4LanguageRecogniserGetLabels(instanceName).then(function(data) {
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

<a name="lr4LanguageRecogniserRetrieve"></a>
# **lr4LanguageRecogniserRetrieve**
> ScoredLabelList lr4LanguageRecogniserRetrieve(instanceName, textInput)

Recognise the language the text is written in.

Recognise the language the text is written in. Returns the list of scored language codes.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.lr4LanguageRecogniserRetrieve(instanceName, textInput).then(function(data) {
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

