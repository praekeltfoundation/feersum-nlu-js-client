# FeersumNluApi.Lr4_language_recognisersApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate**](Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate) | **POST** /lr4_language_recognisers | Create a LR4 text language detector.
[**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails**](Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails) | **GET** /lr4_language_recognisers/{instance_name} | Get details of named instance.
[**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll**](Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll) | **GET** /lr4_language_recognisers | Get list of loaded LR4 text language detectors.
[**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels**](Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels) | **GET** /lr4_language_recognisers/{instance_name}/get_labels | Get list of possible labels.
[**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve**](Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve) | **POST** /lr4_language_recognisers/{instance_name}/retrieve | Recognise the language the text is written in.


<a name="controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate"></a>
# **controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate**
> Lr4InstanceDetail controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate(lr4CreateDetails)

Create a LR4 text language detector.

Create a new LR4 language detector from the pre-trained model name provided. &#39;lid_za&#39; is currently the only pre-trained model that is available, but it was trained on all 11 languages and is pretty accurate. Returns the detail of the new instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

let lr4CreateDetails = new FeersumNluApi.Lr4CreateDetails(); // Lr4CreateDetails | The details of the instance to create.

apiInstance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate(lr4CreateDetails).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails"></a>
# **controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails**
> Lr4InstanceDetail controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails(instanceName)

Get details of named instance.

Get the details of the named LR4 text language detector instance.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails(instanceName).then((data) => {
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

[**Lr4InstanceDetail**](Lr4InstanceDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll"></a>
# **controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll**
> Lr4InstanceDetailList controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll()

Get list of loaded LR4 text language detectors.

Get the list of loaded LR4 text language detectors.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();
apiInstance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels"></a>
# **controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels**
> ClassLabelList controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels(instanceName)

Get list of possible labels.

Returns the classifier&#39;s list of possible class labels.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

apiInstance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels(instanceName).then((data) => {
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

[**ClassLabelList**](ClassLabelList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve"></a>
# **controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve**
> ScoredLabelList controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve(instanceName, textInput)

Recognise the language the text is written in.

Recognise the language the text is written in. Returns the list of scored language codes.

### Example
```javascript
import FeersumNluApi from 'feersum_nlu_api';
let defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FeersumNluApi.Lr4_language_recognisersApi();

let instanceName = "instanceName_example"; // String | The name of the model instance.

let textInput = new FeersumNluApi.TextInput(); // TextInput | The input text.

apiInstance.controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve(instanceName, textInput).then((data) => {
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

[**ScoredLabelList**](ScoredLabelList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

