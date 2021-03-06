/**
 * FeersumNLU API
 * This is the HTTP API for Feersum NLU. See https://github.com/praekelt/feersum-nlu-api-wrappers for examples of how to use the API.
 *
 * OpenAPI spec version: 2.0.3
 * Contact: nlu@feersum.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.ClassLabelPair = factory(root.FeersumNluApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClassLabelPair model module.
   * @module model/ClassLabelPair
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>ClassLabelPair</code>.
   * The ground truth label, predicted label and matrix (train/test) to use.
   * @alias module:model/ClassLabelPair
   * @class
   * @param trueLabel {String} 
   * @param predictedLabel {String} 
   * @param matrixName {String} The confusion matrix to use. Should be either 'train' or 'test' which refers to the confusion matrix of the training data or the testing data respectively.
   */
  var exports = function(trueLabel, predictedLabel, matrixName) {
    var _this = this;

    _this['true_label'] = trueLabel;
    _this['predicted_label'] = predictedLabel;
    _this['matrix_name'] = matrixName;
  };

  /**
   * Constructs a <code>ClassLabelPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassLabelPair} obj Optional instance to populate.
   * @return {module:model/ClassLabelPair} The populated <code>ClassLabelPair</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('true_label')) {
        obj['true_label'] = ApiClient.convertToType(data['true_label'], 'String');
      }
      if (data.hasOwnProperty('predicted_label')) {
        obj['predicted_label'] = ApiClient.convertToType(data['predicted_label'], 'String');
      }
      if (data.hasOwnProperty('matrix_name')) {
        obj['matrix_name'] = ApiClient.convertToType(data['matrix_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} true_label
   */
  exports.prototype['true_label'] = undefined;
  /**
   * @member {String} predicted_label
   */
  exports.prototype['predicted_label'] = undefined;
  /**
   * The confusion matrix to use. Should be either 'train' or 'test' which refers to the confusion matrix of the training data or the testing data respectively.
   * @member {String} matrix_name
   */
  exports.prototype['matrix_name'] = undefined;



  return exports;
}));


