# FeersumNluApi.Duckling_entity_extractorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate**](Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate) | **POST** /duckling_entity_extractors | Create a duckling entity extractor.
[**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails**](Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails) | **GET** /duckling_entity_extractors/{instance_name} | Get details of named instance.
[**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll**](Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll) | **GET** /duckling_entity_extractors | Get list of loaded regular expression entity extractors.
[**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve**](Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve) | **POST** /duckling_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.


<a name="controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate"></a>
# **controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate**
> DucklingInstanceDetail controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate(ducklingEntCreateDetails)

Create a duckling entity extractor.

Create a new duckling entity extractor or load one from the store.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

var ducklingEntCreateDetails = new FeersumNluApi.DucklingEntCreateDetails(); // DucklingEntCreateDetails | The details of the instance to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate(ducklingEntCreateDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ducklingEntCreateDetails** | [**DucklingEntCreateDetails**](DucklingEntCreateDetails.md)| The details of the instance to create. | 

### Return type

[**DucklingInstanceDetail**](DucklingInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails"></a>
# **controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails**
> DucklingInstanceDetail controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails(instanceName)

Get details of named instance.

Get the details of the named duckling entity extractor instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails(instanceName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 

### Return type

[**DucklingInstanceDetail**](DucklingInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll"></a>
# **controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll**
> DucklingInstanceDetailList controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll()

Get list of loaded regular expression entity extractors.

Get the list of loaded duckling entity extractors.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DucklingInstanceDetailList**](DucklingInstanceDetailList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve"></a>
# **controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve**
> EntityList controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve(instanceName, textInput)

Extract information based on the regular expression.

Extract the entities parsed by duckling.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve(instanceName, textInput, callback);
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

