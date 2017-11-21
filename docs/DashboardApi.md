# FeersumNluApi.DashboardApi

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllersDashboardControllerDashboardGetDetails**](DashboardApi.md#controllersDashboardControllerDashboardGetDetails) | **GET** /dashboard | Your service dashboard.


<a name="controllersDashboardControllerDashboardGetDetails"></a>
# **controllersDashboardControllerDashboardGetDetails**
> DashboardDetail controllersDashboardControllerDashboardGetDetails()

Your service dashboard.

Get your list of loaded model instances, the total API hits for each, API version, etc.

### Example
```javascript
var FeersumNluApi = require('feersum_nlu_api');
var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new FeersumNluApi.DashboardApi();
apiInstance.controllersDashboardControllerDashboardGetDetails().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DashboardDetail**](DashboardDetail.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

