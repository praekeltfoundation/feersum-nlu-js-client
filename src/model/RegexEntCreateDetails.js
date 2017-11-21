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
* The RegexEntCreateDetails model module.
* @module model/RegexEntCreateDetails
* @version 2.0.3
*/
export default class RegexEntCreateDetails {
    /**
    * Constructs a new <code>RegexEntCreateDetails</code>.
    * The details of the model instance to create.
    * @alias module:model/RegexEntCreateDetails
    * @class
    * @param loadFromStore {Boolean} Indicates if a pre-existing model with the specified name should be loaded from the model store. Usually set to False in which case a new model is created with details as specified.
    * @param name {String} The sluggy-url-friendly-name of the instance to create.
    */

    constructor(loadFromStore, name) {
        

        
        

        this['load_from_store'] = loadFromStore;this['name'] = name;

        
    }

    /**
    * Constructs a <code>RegexEntCreateDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegexEntCreateDetails} obj Optional instance to populate.
    * @return {module:model/RegexEntCreateDetails} The populated <code>RegexEntCreateDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegexEntCreateDetails();

            
            
            

            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('load_from_store')) {
                obj['load_from_store'] = ApiClient.convertToType(data['load_from_store'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('regex')) {
                obj['regex'] = ApiClient.convertToType(data['regex'], 'String');
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
    * Indicates if a pre-existing model with the specified name should be loaded from the model store. Usually set to False in which case a new model is created with details as specified.
    * @member {Boolean} load_from_store
    */
    load_from_store = undefined;
    /**
    * The sluggy-url-friendly-name of the instance to create.
    * @member {String} name
    */
    name = undefined;
    /**
    * The regular expression.
    * @member {String} regex
    */
    regex = undefined;








}


