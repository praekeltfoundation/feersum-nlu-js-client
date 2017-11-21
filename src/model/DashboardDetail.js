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
    define(['ApiClient', 'model/DashboardModelDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardModelDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.FeersumNluApi) {
      root.FeersumNluApi = {};
    }
    root.FeersumNluApi.DashboardDetail = factory(root.FeersumNluApi.ApiClient, root.FeersumNluApi.DashboardModelDetail);
  }
}(this, function(ApiClient, DashboardModelDetail) {
  'use strict';




  /**
   * The DashboardDetail model module.
   * @module model/DashboardDetail
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>DashboardDetail</code>.
   * Your dashboard content.
   * @alias module:model/DashboardDetail
   * @class
   * @param apiVersion {String} The version of the http api.
   * @param modelList {Array.<module:model/DashboardModelDetail>} A list of models' instance details.
   * @param peakApiHitRate {Number} The peak api hit rate (hits/s) over the last couple of window periods. A window period is in the order of 5 minutes.
   * @param serviceName {String} The details of this service.
   */
  var exports = function(apiVersion, modelList, peakApiHitRate, serviceName) {
    var _this = this;

    _this['api_version'] = apiVersion;
    _this['model_list'] = modelList;
    _this['peak_api_hit_rate'] = peakApiHitRate;
    _this['service_name'] = serviceName;
  };

  /**
   * Constructs a <code>DashboardDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardDetail} obj Optional instance to populate.
   * @return {module:model/DashboardDetail} The populated <code>DashboardDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('api_version')) {
        obj['api_version'] = ApiClient.convertToType(data['api_version'], 'String');
      }
      if (data.hasOwnProperty('model_list')) {
        obj['model_list'] = ApiClient.convertToType(data['model_list'], [DashboardModelDetail]);
      }
      if (data.hasOwnProperty('peak_api_hit_rate')) {
        obj['peak_api_hit_rate'] = ApiClient.convertToType(data['peak_api_hit_rate'], 'Number');
      }
      if (data.hasOwnProperty('service_name')) {
        obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The version of the http api.
   * @member {String} api_version
   */
  exports.prototype['api_version'] = undefined;
  /**
   * A list of models' instance details.
   * @member {Array.<module:model/DashboardModelDetail>} model_list
   */
  exports.prototype['model_list'] = undefined;
  /**
   * The peak api hit rate (hits/s) over the last couple of window periods. A window period is in the order of 5 minutes.
   * @member {Number} peak_api_hit_rate
   */
  exports.prototype['peak_api_hit_rate'] = undefined;
  /**
   * The details of this service.
   * @member {String} service_name
   */
  exports.prototype['service_name'] = undefined;



  return exports;
}));

