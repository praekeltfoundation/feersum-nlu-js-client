# FeersumNluApi.SimilarityEntCreateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The sluggy-url-friendly-name of the instance to create. | 
**desc** | **String** | The longer existential description of this instance&#39;s purpose in life. | [optional] 
**similarWords** | **[String]** |  | [optional] 
**threshold** | **Number** | The threshold below which words are not similar. | [optional] 
**wordManifold** | **String** |  | [optional] 
**loadFromStore** | **Boolean** | Indicates if a pre-existing model with the specified name should be loaded from the model store. Usually set to False in which case a new model is created with details as specified. | 


