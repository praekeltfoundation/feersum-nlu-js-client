# FeersumNluApi.InstanceDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The sluggy-url-friendly-name of the instance. | 
**id** | **String** | The unique id of a specific version of the model instance. | 
**desc** | **String** | The longer existential description of this instance&#39;s purpose in life. | [optional] 
**trainingAccuracy** | **Number** | The accuracy of the model as measured on the training set. | [optional] 
**trainingStamp** | **String** | The time when the training operation concluded. | [optional] 
**trainingCm** | **Object** | The confusion matrix as measured on the training set. The matrix is expected to be quite sparse so a compact dict of dicts representation is used. | [optional] 
**cmLabels** | **Object** | A dict that, if present, maps from the confusion matrix row and column labels to longer more descriptive labels. For example, if present it maps an FAQ answer ID to the string answer which may be either a label or the full text answer. | [optional] 
**wordManifoldList** | [**[LabeledWordManifold]**](LabeledWordManifold.md) | The list of labelled word manifolds to use for training. | [optional] 
**threshold** | **Number** | There is typically some model dependent threshold to be set upon training and which is possibly mutable post training. This is that threshold. | [optional] 


