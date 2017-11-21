/**
 * FeersumNLU API
 * This is the HTTP API for Feersum NLU. See https://github.com/praekelt/feersum-nlu-api-wrappers for examples of how to use the API.
 *
 * OpenAPI spec version: 2.0.3
 * Contact: nlu@feersum.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The DashboardModelDetail model module.
* @module model/DashboardModelDetail
* @version 2.0.3
*/
export default class DashboardModelDetail {
    /**
    * Constructs a new <code>DashboardModelDetail</code>.
    * The model instance detail.
    * @alias module:model/DashboardModelDetail
    * @class
    * @param modelType {String} The type of this model.
    * @param name {String} The sluggy-url-friendly-name of the instance.
    */

    constructor(modelType, name) {
        

        
        

        this['model_type'] = modelType;this['name'] = name;

        
    }

    /**
    * Constructs a <code>DashboardModelDetail</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DashboardModelDetail} obj Optional instance to populate.
    * @return {module:model/DashboardModelDetail} The populated <code>DashboardModelDetail</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardModelDetail();

            
            
            

            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('model_type')) {
                obj['model_type'] = ApiClient.convertToType(data['model_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('peak_api_hit_rate')) {
                obj['peak_api_hit_rate'] = ApiClient.convertToType(data['peak_api_hit_rate'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The longer existential description of this instance's purpose in life.
    * @member {String} desc
    */
    desc = undefined;
    /**
    * The type of this model.
    * @member {String} model_type
    */
    model_type = undefined;
    /**
    * The sluggy-url-friendly-name of the instance.
    * @member {String} name
    */
    name = undefined;
    /**
    * The peak api hit rate (hits/s) over the last couple of window periods. A window period is in the order of 5 minutes.
    * @member {Number} peak_api_hit_rate
    */
    peak_api_hit_rate = undefined;








}


