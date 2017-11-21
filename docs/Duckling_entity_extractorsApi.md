# FeersumNluApi.Duckling_entity_extractorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ducklingEntityExtractorCreate**](Duckling_entity_extractorsApi.md#ducklingEntityExtractorCreate) | **POST** /duckling_entity_extractors | Create a duckling entity extractor.
[**ducklingEntityExtractorGetDetails**](Duckling_entity_extractorsApi.md#ducklingEntityExtractorGetDetails) | **GET** /duckling_entity_extractors/{instance_name} | Get details of named instance.
[**ducklingEntityExtractorGetDetailsAll**](Duckling_entity_extractorsApi.md#ducklingEntityExtractorGetDetailsAll) | **GET** /duckling_entity_extractors | Get list of loaded regular expression entity extractors.
[**ducklingEntityExtractorRetrieve**](Duckling_entity_extractorsApi.md#ducklingEntityExtractorRetrieve) | **POST** /duckling_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.


<a name="ducklingEntityExtractorCreate"></a>
# **ducklingEntityExtractorCreate**
> DucklingInstanceDetail ducklingEntityExtractorCreate(ducklingEntCreateDetails)

Create a duckling entity extractor.

Create a new duckling entity extractor or load one from the store.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

let ducklingEntCreateDetails = new FeersumNluApi.DucklingEntCreateDetails(); // DucklingEntCreateDetails | The details of the instance to create.

apiInstance.ducklingEntityExtractorCreate(ducklingEntCreateDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="ducklingEntityExtractorGetDetails"></a>
# **ducklingEntityExtractorGetDetails**
> DucklingInstanceDetail ducklingEntityExtractorGetDetails(instanceName)

Get details of named instance.

Get the details of the named duckling entity extractor instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.ducklingEntityExtractorGetDetails(instanceName).then((data) => {
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

[**DucklingInstanceDetail**](DucklingInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ducklingEntityExtractorGetDetailsAll"></a>
# **ducklingEntityExtractorGetDetailsAll**
> DucklingInstanceDetailList ducklingEntityExtractorGetDetailsAll()

Get list of loaded regular expression entity extractors.

Get the list of loaded duckling entity extractors.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();
apiInstance.ducklingEntityExtractorGetDetailsAll().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="ducklingEntityExtractorRetrieve"></a>
# **ducklingEntityExtractorRetrieve**
> EntityList ducklingEntityExtractorRetrieve(instanceName, textInput)

Extract information based on the regular expression.

Extract the entities parsed by duckling.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Duckling_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.ducklingEntityExtractorRetrieve(instanceName, textInput).then((data) => {
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

