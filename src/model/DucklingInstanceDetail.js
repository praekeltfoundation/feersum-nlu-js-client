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
    root.FeersumNluApi.DucklingInstanceDetail = factory(root.FeersumNluApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DucklingInstanceDetail model module.
   * @module model/DucklingInstanceDetail
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>DucklingInstanceDetail</code>.
   * The model instance detail.
   * @alias module:model/DucklingInstanceDetail
   * @class
   * @param name {String} The sluggy-url-friendly-name of the instance.
   * @param id {String} The unique id of a specific version of the model instance.
   */
  var exports = function(name, id) {
    var _this = this;

    _this['name'] = name;
    _this['id'] = id;

  };

  /**
   * Constructs a <code>DucklingInstanceDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DucklingInstanceDetail} obj Optional instance to populate.
   * @return {module:model/DucklingInstanceDetail} The populated <code>DucklingInstanceDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
    }
    return obj;
  }

  /**
   * The sluggy-url-friendly-name of the instance.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The unique id of a specific version of the model instance.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The longer existential description of this instance's purpose in life.
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;



  return exports;
}));


