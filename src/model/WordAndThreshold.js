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
    root.FeersumNluApi.WordAndThreshold = factory(root.FeersumNluApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WordAndThreshold model module.
   * @module model/WordAndThreshold
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>WordAndThreshold</code>.
   * A word and a threshold.
   * @alias module:model/WordAndThreshold
   * @class
   * @param word {String} 
   * @param threshold {Number} 
   */
  var exports = function(word, threshold) {
    var _this = this;

    _this['word'] = word;
    _this['threshold'] = threshold;
  };

  /**
   * Constructs a <code>WordAndThreshold</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WordAndThreshold} obj Optional instance to populate.
   * @return {module:model/WordAndThreshold} The populated <code>WordAndThreshold</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('word')) {
        obj['word'] = ApiClient.convertToType(data['word'], 'String');
      }
      if (data.hasOwnProperty('threshold')) {
        obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} word
   */
  exports.prototype['word'] = undefined;
  /**
   * @member {Number} threshold
   */
  exports.prototype['threshold'] = undefined;



  return exports;
}));


