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
* The Lr4CreateDetails model module.
* @module model/Lr4CreateDetails
* @version 2.0.3
*/
export default class Lr4CreateDetails {
    /**
    * Constructs a new <code>Lr4CreateDetails</code>.
    * The details of the model instance to create.
    * @alias module:model/Lr4CreateDetails
    * @class
    * @param modelFile {String} The pre-trained model to load.
    * @param name {String} The sluggy-url-friendly-name of the instance to create.
    */

    constructor(modelFile, name) {
        

        
        

        this['model_file'] = modelFile;this['name'] = name;

        
    }

    /**
    * Constructs a <code>Lr4CreateDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Lr4CreateDetails} obj Optional instance to populate.
    * @return {module:model/Lr4CreateDetails} The populated <code>Lr4CreateDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Lr4CreateDetails();

            
            
            

            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('model_file')) {
                obj['model_file'] = ApiClient.convertToType(data['model_file'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
    * The pre-trained model to load.
    * @member {String} model_file
    */
    model_file = undefined;
    /**
    * The sluggy-url-friendly-name of the instance to create.
    * @member {String} name
    */
    name = undefined;








}


