# FeersumNluApi.Similarity_entity_extractorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate**](Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate) | **POST** /similarity_entity_extractors | Create a word similarity entity extractor.
[**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails**](Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails) | **GET** /similarity_entity_extractors/{instance_name} | Get details of named instance.
[**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll**](Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll) | **GET** /similarity_entity_extractors | Get list of loaded similarity entity extractors.
[**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve**](Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve) | **POST** /similarity_entity_extractors/{instance_name}/retrieve | Extract information based on word similarity.


<a name="controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate"></a>
# **controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate**
> SimilarityInstanceDetail controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate(similarityEntCreateDetails)

Create a word similarity entity extractor.

Create a new word similarity entity extractor or load one from the store.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Similarity_entity_extractorsApi();

let similarityEntCreateDetails = new FeersumNluApi.SimilarityEntCreateDetails(); // SimilarityEntCreateDetails | The details of the instance to create.

apiInstance.controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate(similarityEntCreateDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **similarityEntCreateDetails** | [**SimilarityEntCreateDetails**](SimilarityEntCreateDetails.md)| The details of the instance to create. | 

### Return type

[**SimilarityInstanceDetail**](SimilarityInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails"></a>
# **controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails**
> SimilarityInstanceDetail controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails(instanceName)

Get details of named instance.

Get the details of the named similarity entity extractor instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Similarity_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails(instanceName).then((data) => {
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

[**SimilarityInstanceDetail**](SimilarityInstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll"></a>
# **controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll**
> SimilarityInstanceDetailList controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll()

Get list of loaded similarity entity extractors.

Get the list of loaded similarity entity extractors.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Similarity_entity_extractorsApi();
apiInstance.controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SimilarityInstanceDetailList**](SimilarityInstanceDetailList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve"></a>
# **controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve**
> EntityList controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve(instanceName, textInput)

Extract information based on word similarity.

Extract the word entities that are similar to the list of words used to create this model instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Similarity_entity_extractorsApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve(instanceName, textInput).then((data) => {
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

