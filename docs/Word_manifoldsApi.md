# FeersumNluApi.Word_manifoldsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersWordManifoldsControllerWordManifoldAddSimilarWords**](Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldAddSimilarWords) | **POST** /word_manifolds/{instance_name}/vocab | Add new words.
[**controllersWordManifoldsControllerWordManifoldCreate**](Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldCreate) | **POST** /word_manifolds | Create a word manifold model.
[**controllersWordManifoldsControllerWordManifoldGetSimilarWords**](Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldGetSimilarWords) | **POST** /word_manifolds/{instance_name}/similar_words | Find similar words.
[**controllersWordManifoldsControllerWordManifoldSpellCorrect**](Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldSpellCorrect) | **POST** /word_manifolds/{instance_name}/spell_correct | Spell correct a word.


<a name="controllersWordManifoldsControllerWordManifoldAddSimilarWords"></a>
# **controllersWordManifoldsControllerWordManifoldAddSimilarWords**
> InstanceDetail controllersWordManifoldsControllerWordManifoldAddSimilarWords(instanceName, newWordList)

Add new words.

Add new words to the manifold that are similar to existing words and save the manifold. Warning! - Because this operation saves the updated word manifold to the store it could take a few seconds to complete. Returns the details of the updated instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Word_manifoldsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var newWordList = new FeersumNluApi.NewWordList(); // NewWordList | List of new words.

apiInstance.controllersWordManifoldsControllerWordManifoldAddSimilarWords(instanceName, newWordList).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **newWordList** | [**NewWordList**](NewWordList.md)| List of new words. | 

### Return type

[**InstanceDetail**](InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersWordManifoldsControllerWordManifoldCreate"></a>
# **controllersWordManifoldsControllerWordManifoldCreate**
> InstanceDetail controllersWordManifoldsControllerWordManifoldCreate(createDetails)

Create a word manifold model.

Create a new word manifold model using an input file or load a model from the store. Warning! - These models are quite big and each takes a few seconds to load/create. Returns the details of the new or loaded instance.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Word_manifoldsApi();

var createDetails = new FeersumNluApi.CreateDetails(); // CreateDetails | The details of the instance to create.

apiInstance.controllersWordManifoldsControllerWordManifoldCreate(createDetails).then(function(data) {
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

<a name="controllersWordManifoldsControllerWordManifoldGetSimilarWords"></a>
# **controllersWordManifoldsControllerWordManifoldGetSimilarWords**
> WordAndDistanceList controllersWordManifoldsControllerWordManifoldGetSimilarWords(instanceName, wordAndThreshold)

Find similar words.

Returns words from the manifold that are similar to the parameter word.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Word_manifoldsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var wordAndThreshold = new FeersumNluApi.WordAndThreshold(); // WordAndThreshold | A word token and an accompanying threshold.

apiInstance.controllersWordManifoldsControllerWordManifoldGetSimilarWords(instanceName, wordAndThreshold).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceName** | **String**| The name of the model instance. | 
 **wordAndThreshold** | [**WordAndThreshold**](WordAndThreshold.md)| A word token and an accompanying threshold. | 

### Return type

[**WordAndDistanceList**](WordAndDistanceList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersWordManifoldsControllerWordManifoldSpellCorrect"></a>
# **controllersWordManifoldsControllerWordManifoldSpellCorrect**
> WordAndDistanceList controllersWordManifoldsControllerWordManifoldSpellCorrect(instanceName, textInput)

Spell correct a word.

Spell correct a word replacing it with the most likely word from the manifold. Returns one or more scored candidate words.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Word_manifoldsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersWordManifoldsControllerWordManifoldSpellCorrect(instanceName, textInput).then(function(data) {
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

[**WordAndDistanceList**](WordAndDistanceList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

