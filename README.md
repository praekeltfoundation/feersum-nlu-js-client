# feersum_nlu_api

FeersumNluApi - JavaScript client for feersum_nlu_api
This is the HTTP API for Feersum NLU. See https://github.com/praekelt/feersum-nlu-api-wrappers for examples of how to use the API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.3
- Package version: 2.0.3
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.feersum.io](https://www.feersum.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install feersum_nlu_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your feersum_nlu_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('feersum_nlu_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/feersum_nlu_api
then install it via:

```shell
    npm install YOUR_USERNAME/feersum_nlu_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FeersumNluApi = require('feersum_nlu_api');

var defaultClient = FeersumNluApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix['AUTH_TOKEN'] = "Token"

var api = new FeersumNluApi.DashboardApi()
api.controllersDashboardControllerDashboardGetDetails().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://nlu.playground.feersum.io:443/nlu/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FeersumNluApi.DashboardApi* | [**controllersDashboardControllerDashboardGetDetails**](docs/DashboardApi.md#controllersDashboardControllerDashboardGetDetails) | **GET** /dashboard | Your service dashboard.
*FeersumNluApi.Date_parsersApi* | [**controllersDateParsersControllerDateParserRetrieve**](docs/Date_parsersApi.md#controllersDateParsersControllerDateParserRetrieve) | **POST** /date_parsers/{instance_name}/retrieve | Extract dates.
*FeersumNluApi.Duckling_entity_extractorsApi* | [**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate**](docs/Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorCreate) | **POST** /duckling_entity_extractors | Create a duckling entity extractor.
*FeersumNluApi.Duckling_entity_extractorsApi* | [**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails**](docs/Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetails) | **GET** /duckling_entity_extractors/{instance_name} | Get details of named instance.
*FeersumNluApi.Duckling_entity_extractorsApi* | [**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll**](docs/Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorGetDetailsAll) | **GET** /duckling_entity_extractors | Get list of loaded regular expression entity extractors.
*FeersumNluApi.Duckling_entity_extractorsApi* | [**controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve**](docs/Duckling_entity_extractorsApi.md#controllersDucklingEntityExtractorsControllerDucklingEntityExtractorRetrieve) | **POST** /duckling_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherAddTrainingSamples**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherAddTrainingSamples) | **POST** /faq_matchers/{instance_name}/training_samples | Add training samples.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherCreate**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherCreate) | **POST** /faq_matchers | Create an FAQ matcher.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherCurate**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherCurate) | **POST** /faq_matchers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherDelTrainingSamples**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherDelTrainingSamples) | **DELETE** /faq_matchers/{instance_name}/training_samples | Delete training samples.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherGetDetails**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetDetails) | **GET** /faq_matchers/{instance_name} | Get details of named instance.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherGetDetailsAll**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetDetailsAll) | **GET** /faq_matchers | Get list of loaded FAQ matchers.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherGetLabels**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetLabels) | **GET** /faq_matchers/{instance_name}/get_labels | Get list of possible labels.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherGetTrainingSamples**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherGetTrainingSamples) | **GET** /faq_matchers/{instance_name}/training_samples | Get training samples.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherOnlineTrainingSamples) | **POST** /faq_matchers/{instance_name}/online_training_samples | Train/update the classifier online with the samples provided.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherRetrieve**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherRetrieve) | **POST** /faq_matchers/{instance_name}/retrieve | Match retrieve and FAQ.
*FeersumNluApi.Faq_matchersApi* | [**controllersFaqMatchersControllerFaqMatcherTrain**](docs/Faq_matchersApi.md#controllersFaqMatchersControllerFaqMatcherTrain) | **POST** /faq_matchers/{instance_name}/train | Train the named FAQ matcher.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierAddTrainingSamples) | **POST** /intent_classifiers/{instance_name}/training_samples | Add training samples.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierCreate**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierCreate) | **POST** /intent_classifiers | Create an intent classifier.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierCurate**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierCurate) | **POST** /intent_classifiers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierDelTrainingSamples) | **DELETE** /intent_classifiers/{instance_name}/training_samples | Delete training samples.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierGetDetails**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetDetails) | **GET** /intent_classifiers/{instance_name} | Get details of named instance.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierGetDetailsAll**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetDetailsAll) | **GET** /intent_classifiers | Get list of loaded intent classifiers.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierGetLabels**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetLabels) | **GET** /intent_classifiers/{instance_name}/get_labels | Get list of possible labels.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierGetTrainingSamples) | **GET** /intent_classifiers/{instance_name}/training_samples | Get training samples.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierOnlineTrainingSamples) | **POST** /intent_classifiers/{instance_name}/online_training_samples | Train/update the classifier online with the samples provided.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierRetrieve**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierRetrieve) | **POST** /intent_classifiers/{instance_name}/retrieve | Classify intent.
*FeersumNluApi.Intent_classifiersApi* | [**controllersIntentClassifiersControllerIntentClassifierTrain**](docs/Intent_classifiersApi.md#controllersIntentClassifiersControllerIntentClassifierTrain) | **POST** /intent_classifiers/{instance_name}/train | Train the named intent classifier.
*FeersumNluApi.Lr4_language_recognisersApi* | [**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate**](docs/Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserCreate) | **POST** /lr4_language_recognisers | Create a LR4 text language detector.
*FeersumNluApi.Lr4_language_recognisersApi* | [**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails**](docs/Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetails) | **GET** /lr4_language_recognisers/{instance_name} | Get details of named instance.
*FeersumNluApi.Lr4_language_recognisersApi* | [**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll**](docs/Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetDetailsAll) | **GET** /lr4_language_recognisers | Get list of loaded LR4 text language detectors.
*FeersumNluApi.Lr4_language_recognisersApi* | [**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels**](docs/Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserGetLabels) | **GET** /lr4_language_recognisers/{instance_name}/get_labels | Get list of possible labels.
*FeersumNluApi.Lr4_language_recognisersApi* | [**controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve**](docs/Lr4_language_recognisersApi.md#controllersLr4LanguageRecognisersControllerLr4LanguageRecogniserRetrieve) | **POST** /lr4_language_recognisers/{instance_name}/retrieve | Recognise the language the text is written in.
*FeersumNluApi.Regex_entity_extractorsApi* | [**controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate**](docs/Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorCreate) | **POST** /regex_entity_extractors | Create a regular expression entity extractor.
*FeersumNluApi.Regex_entity_extractorsApi* | [**controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails**](docs/Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetails) | **GET** /regex_entity_extractors/{instance_name} | Get details of named instance.
*FeersumNluApi.Regex_entity_extractorsApi* | [**controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll**](docs/Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorGetDetailsAll) | **GET** /regex_entity_extractors | Get list of loaded regular expression entity extractors.
*FeersumNluApi.Regex_entity_extractorsApi* | [**controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve**](docs/Regex_entity_extractorsApi.md#controllersRegexEntityExtractorsControllerRegexEntityExtractorRetrieve) | **POST** /regex_entity_extractors/{instance_name}/retrieve | Extract information based on the regular expression.
*FeersumNluApi.Sentiment_detectorsApi* | [**controllersSentimentDetectorsControllerSentimentDetectorRetrieve**](docs/Sentiment_detectorsApi.md#controllersSentimentDetectorsControllerSentimentDetectorRetrieve) | **POST** /sentiment_detectors/{instance_name}/retrieve | Detect sentiment.
*FeersumNluApi.Similarity_entity_extractorsApi* | [**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate**](docs/Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorCreate) | **POST** /similarity_entity_extractors | Create a word similarity entity extractor.
*FeersumNluApi.Similarity_entity_extractorsApi* | [**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails**](docs/Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetails) | **GET** /similarity_entity_extractors/{instance_name} | Get details of named instance.
*FeersumNluApi.Similarity_entity_extractorsApi* | [**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll**](docs/Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorGetDetailsAll) | **GET** /similarity_entity_extractors | Get list of loaded similarity entity extractors.
*FeersumNluApi.Similarity_entity_extractorsApi* | [**controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve**](docs/Similarity_entity_extractorsApi.md#controllersSimilarityEntityExtractorsControllerSimilarityEntityExtractorRetrieve) | **POST** /similarity_entity_extractors/{instance_name}/retrieve | Extract information based on word similarity.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierAddTrainingSamples**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierAddTrainingSamples) | **POST** /text_classifiers/{instance_name}/training_samples | Add training samples.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierCreate**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierCreate) | **POST** /text_classifiers | Create a text classifier.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierCurate**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierCurate) | **POST** /text_classifiers/{instance_name}/curate | Endpoint to aid in the curation of a model instance.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierDelTrainingSamples**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierDelTrainingSamples) | **DELETE** /text_classifiers/{instance_name}/training_samples | Delete training samples.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierGetDetails**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetDetails) | **GET** /text_classifiers/{instance_name} | Get details of named instance.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierGetDetailsAll**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetDetailsAll) | **GET** /text_classifiers | Get list of loaded text classifiers.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierGetLabels**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetLabels) | **GET** /text_classifiers/{instance_name}/get_labels | Get list of possible labels.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierGetTrainingSamples**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierGetTrainingSamples) | **GET** /text_classifiers/{instance_name}/training_samples | Get training samples.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierRetrieve**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierRetrieve) | **POST** /text_classifiers/{instance_name}/retrieve | Classify text.
*FeersumNluApi.Text_classifiersApi* | [**controllersTextClassifiersControllerTextClassifierTrain**](docs/Text_classifiersApi.md#controllersTextClassifiersControllerTextClassifierTrain) | **POST** /text_classifiers/{instance_name}/train | Train the named text classifier.
*FeersumNluApi.Word_manifoldsApi* | [**controllersWordManifoldsControllerWordManifoldAddSimilarWords**](docs/Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldAddSimilarWords) | **POST** /word_manifolds/{instance_name}/vocab | Add new words.
*FeersumNluApi.Word_manifoldsApi* | [**controllersWordManifoldsControllerWordManifoldCreate**](docs/Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldCreate) | **POST** /word_manifolds | Create a word manifold model.
*FeersumNluApi.Word_manifoldsApi* | [**controllersWordManifoldsControllerWordManifoldGetSimilarWords**](docs/Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldGetSimilarWords) | **POST** /word_manifolds/{instance_name}/similar_words | Find similar words.
*FeersumNluApi.Word_manifoldsApi* | [**controllersWordManifoldsControllerWordManifoldSpellCorrect**](docs/Word_manifoldsApi.md#controllersWordManifoldsControllerWordManifoldSpellCorrect) | **POST** /word_manifolds/{instance_name}/spell_correct | Spell correct a word.


## Documentation for Models

 - [FeersumNluApi.ClassLabel](docs/ClassLabel.md)
 - [FeersumNluApi.ClassLabelList](docs/ClassLabelList.md)
 - [FeersumNluApi.ClassLabelPair](docs/ClassLabelPair.md)
 - [FeersumNluApi.CreateDetails](docs/CreateDetails.md)
 - [FeersumNluApi.DashboardDetail](docs/DashboardDetail.md)
 - [FeersumNluApi.DashboardModelDetail](docs/DashboardModelDetail.md)
 - [FeersumNluApi.DateList](docs/DateList.md)
 - [FeersumNluApi.DucklingEntCreateDetails](docs/DucklingEntCreateDetails.md)
 - [FeersumNluApi.DucklingInstanceDetail](docs/DucklingInstanceDetail.md)
 - [FeersumNluApi.DucklingInstanceDetailList](docs/DucklingInstanceDetailList.md)
 - [FeersumNluApi.Entity](docs/Entity.md)
 - [FeersumNluApi.EntityList](docs/EntityList.md)
 - [FeersumNluApi.InstanceDetail](docs/InstanceDetail.md)
 - [FeersumNluApi.InstanceDetailList](docs/InstanceDetailList.md)
 - [FeersumNluApi.LabeledWordManifold](docs/LabeledWordManifold.md)
 - [FeersumNluApi.LabelledTextSample](docs/LabelledTextSample.md)
 - [FeersumNluApi.LabelledTextSampleList](docs/LabelledTextSampleList.md)
 - [FeersumNluApi.Lr4CreateDetails](docs/Lr4CreateDetails.md)
 - [FeersumNluApi.Lr4InstanceDetail](docs/Lr4InstanceDetail.md)
 - [FeersumNluApi.Lr4InstanceDetailList](docs/Lr4InstanceDetailList.md)
 - [FeersumNluApi.ModelDate](docs/ModelDate.md)
 - [FeersumNluApi.NewWord](docs/NewWord.md)
 - [FeersumNluApi.NewWordList](docs/NewWordList.md)
 - [FeersumNluApi.RegexEntCreateDetails](docs/RegexEntCreateDetails.md)
 - [FeersumNluApi.RegexInstanceDetail](docs/RegexInstanceDetail.md)
 - [FeersumNluApi.RegexInstanceDetailList](docs/RegexInstanceDetailList.md)
 - [FeersumNluApi.ScoredLabel](docs/ScoredLabel.md)
 - [FeersumNluApi.ScoredLabelList](docs/ScoredLabelList.md)
 - [FeersumNluApi.Sentiment](docs/Sentiment.md)
 - [FeersumNluApi.SimilarityEntCreateDetails](docs/SimilarityEntCreateDetails.md)
 - [FeersumNluApi.SimilarityInstanceDetail](docs/SimilarityInstanceDetail.md)
 - [FeersumNluApi.SimilarityInstanceDetailList](docs/SimilarityInstanceDetailList.md)
 - [FeersumNluApi.TextInput](docs/TextInput.md)
 - [FeersumNluApi.TotalSamples](docs/TotalSamples.md)
 - [FeersumNluApi.TrainDetails](docs/TrainDetails.md)
 - [FeersumNluApi.WordAndDistance](docs/WordAndDistance.md)
 - [FeersumNluApi.WordAndDistanceList](docs/WordAndDistanceList.md)
 - [FeersumNluApi.WordAndThreshold](docs/WordAndThreshold.md)


## Documentation for Authorization


### APIKeyHeader

- **Type**: API key
- **API key parameter name**: AUTH_TOKEN
- **Location**: HTTP header

