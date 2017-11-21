# FeersumNluApi.Sentiment_detectorsApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersSentimentDetectorsControllerSentimentDetectorRetrieve**](Sentiment_detectorsApi.md#controllersSentimentDetectorsControllerSentimentDetectorRetrieve) | **POST** /sentiment_detectors/{instance_name}/retrieve | Detect sentiment.


<a name="controllersSentimentDetectorsControllerSentimentDetectorRetrieve"></a>
# **controllersSentimentDetectorsControllerSentimentDetectorRetrieve**
> Sentiment controllersSentimentDetectorsControllerSentimentDetectorRetrieve(instanceName, textInput)

Detect sentiment.

Detect the general sentiment in the input text.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.Sentiment_detectorsApi();

var instanceName = "instanceName_example"; // String | The name of the model instance.

var textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersSentimentDetectorsControllerSentimentDetectorRetrieve(instanceName, textInput).then(function(data) {
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

[**Sentiment**](Sentiment.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

