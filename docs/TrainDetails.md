# FeersumNluApi.TrainDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**immediateMode** | **Boolean** | Causes the API call to be blocking and return only once training is complete. Forced to true in the current implementation. | 
**threshold** | **Number** | There is typically some model dependent threshold to be set upon training which is possibly mutable post training. This is that threshold. | [optional] 
**wordManifold** | **String** | The word manifold instance to use for training and later inference.   Rather use the word_manifold_list for supplying a language labelled list of word manifold instances to use in a multi-language system.  | [optional] 
**wordManifoldList** | [**[LabeledWordManifold]**](LabeledWordManifold.md) | The list of labelled word manifolds to use for training. | [optional] 


