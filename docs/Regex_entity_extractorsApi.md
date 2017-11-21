# FeersumNluApi.Regex_entity_extractorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regexEntityExtractorCreate**](Regex_entity_extractorsApi.md#regexEntityExtractorCreate) | **POST** /regex_entity_extractors | Create a regular expression entity extractor.
[**regexEntityExtractorGetDetails**](Regex_entity_extractorsApi.md#regexEntityExtractorGetDetails) | **GET** /regex_entity_extractors/{instance_name} | Get details of named instance.
[**regexEntityExtractorGetDetailsAll**](Regex_entity_extractorsApi.md#regexEntityExtractorGetDetailsAll) | **GET** /regex_entity_extractors | Get list of loaded regular expression entity extractors.
[**regexEntityExtractorRetrieve**](Regex_entity_extractorsApi.md#regexEntityExtractorRetrieve) | **POST** /regex_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.


<a name="regexEntityExtractorCreate"></a>
# **regexEntityExtractorCreate**
> RegexInstanceDetail regexEntityExtractorCreate(regexEntCreateDetails)

Create a regular expression entity extractor.

Create a new regular expression entity extractor or load one from the store.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

var regexEntCreateDetails = new FeersumNluApi.RegexEntCreateDetails(); // RegexEntCreateDetails | The details of the instance to create.

apiInstance.regexEntityExtractorCreate(regexEntCreateDetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regexEntCreateDetails** | [**RegexEntCreateDetails**](RegexEntCreateDetails.md)| The details of the instance to create. | 

### Return type

[**RegexInstanceDetail**](RegexInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="regexEntityExtractorGetDetails"></a>
# **regexEntityExtractorGetDetails**
> RegexInstanceDetail regexEntityExtractorGetDetails(instanceName)

Get details of named instance.

Get the details of the named regular expression entity extractor instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.regexEntityExtractorGetDetails(instanceName).then(function(data) {
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

[**RegexInstanceDetail**](RegexInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="regexEntityExtractorGetDetailsAll"></a>
# **regexEntityExtractorGetDetailsAll**
> RegexInstanceDetailList regexEntityExtractorGetDetailsAll()

Get list of loaded regular expression entity extractors.

Get the list of loaded regular expression entity extractors.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();
apiInstance.regexEntityExtractorGetDetailsAll().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegexInstanceDetailList**](RegexInstanceDetailList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="regexEntityExtractorRetrieve"></a>
# **regexEntityExtractorRetrieve**
> EntityList regexEntityExtractorRetrieve(instanceName, textInput)

Extract information based on the regular expression.

Extract the entities matching the regular expression.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.regexEntityExtractorRetrieve(instanceName, textInput).then(function(data) {
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

[**EntityList**](EntityList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

