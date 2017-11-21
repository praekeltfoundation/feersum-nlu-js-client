# FeersumNluApi.Regex_entity_extractorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate**](Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate) | **POST** /regex_entity_extractors | Create a regular expression entity extractor.
[**controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails**](Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails) | **GET** /regex_entity_extractors/{instance_name} | Get details of named instance.
[**controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll**](Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll) | **GET** /regex_entity_extractors | Get list of loaded regular expression entity extractors.
[**controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve**](Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve) | **POST** /regex_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.


<a name="controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate"></a>
# **controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate**
> RegexInstanceDetail controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate(regexEntCreateDetails)

Create a regular expression entity extractor.

Create a new regular expression entity extractor or load one from the store.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

let regexEntCreateDetails = new FeersumNluApi.RegexEntCreateDetails(); // RegexEntCreateDetails | The details of the instance to create.

apiInstance.controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate(regexEntCreateDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails"></a>
# **controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails**
> RegexInstanceDetail controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails(instanceName)

Get details of named instance.

Get the details of the named regular expression entity extractor instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails(instanceName).then((data) => {
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

[**RegexInstanceDetail**](RegexInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll"></a>
# **controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll**
> RegexInstanceDetailList controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll()

Get list of loaded regular expression entity extractors.

Get the list of loaded regular expression entity extractors.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();
apiInstance.controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve"></a>
# **controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve**
> EntityList controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve(instanceName, textInput)

Extract information based on the regular expression.

Extract the entities matching the regular expression.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Regex_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve(instanceName, textInput).then((data) => {
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

[**EntityList**](EntityList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

