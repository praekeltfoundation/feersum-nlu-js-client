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
    define(['ApiClient', 'model/LabeledWordManifold'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LabeledWordManifold'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.InstanceDetail = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.LabeledWordManifold);
  }
}(this, function(ApiClient, LabeledWordManifold) {
  'use strict';




  /**
   * The InstanceDetail model module.
   * @module model/InstanceDetail
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>InstanceDetail</code>.
   * The model instance detail.
   * @alias module:model/InstanceDetail
   * @class
   * @param id {String} The unique id of a specific version of the model instance.
   * @param name {String} The sluggy-url-friendly-name of the instance.
   */
  var exports = function(id, name) {
    var _this = this;



    _this['id'] = id;
    _this['name'] = name;





  };

  /**
   * Constructs a <code>InstanceDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstanceDetail} obj Optional instance to populate.
   * @return {module:model/InstanceDetail} The populated <code>InstanceDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cm_labels')) {
        obj['cm_labels'] = ApiClient.convertToType(data['cm_labels'], Object);
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('threshold')) {
        obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
      }
      if (data.hasOwnProperty('training_accuracy')) {
        obj['training_accuracy'] = ApiClient.convertToType(data['training_accuracy'], 'Number');
      }
      if (data.hasOwnProperty('training_cm')) {
        obj['training_cm'] = ApiClient.convertToType(data['training_cm'], Object);
      }
      if (data.hasOwnProperty('training_stamp')) {
        obj['training_stamp'] = ApiClient.convertToType(data['training_stamp'], 'String');
      }
      if (data.hasOwnProperty('word_manifold_list')) {
        obj['word_manifold_list'] = ApiClient.convertToType(data['word_manifold_list'], [LabeledWordManifold]);
      }
    }
    return obj;
  }

  /**
   * A dict that, if present, maps from the confusion matrix row and column labels to longer more descriptive labels. For example, if present it maps an FAQ answer ID to the string answer which may be either a label or the full text answer.
   * @member {Object} cm_labels
   */
  exports.prototype['cm_labels'] = undefined;
  /**
   * The longer existential description of this instance's purpose in life.
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;
  /**
   * The unique id of a specific version of the model instance.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The sluggy-url-friendly-name of the instance.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * There is typically some model dependent threshold to be set upon training and which is possibly mutable post training. This is that threshold.
   * @member {Number} threshold
   */
  exports.prototype['threshold'] = undefined;
  /**
   * The accuracy of the model as measured on the training set.
   * @member {Number} training_accuracy
   */
  exports.prototype['training_accuracy'] = undefined;
  /**
   * The confusion matrix as measured on the training set. The matrix is expected to be quite sparse so a compact dict of dicts representation is used.
   * @member {Object} training_cm
   */
  exports.prototype['training_cm'] = undefined;
  /**
   * The time when the training operation concluded.
   * @member {String} training_stamp
   */
  exports.prototype['training_stamp'] = undefined;
  /**
   * The list of labelled word manifolds to use for training.
   * @member {Array.<module:model/LabeledWordManifold>} word_manifold_list
   */
  exports.prototype['word_manifold_list'] = undefined;



  return exports;
}));

