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
* The SimilarityEntCreateDetails model module.
* @module model/SimilarityEntCreateDetails
* @version 2.0.3
*/
export default class SimilarityEntCreateDetails {
    /**
    * Constructs a new <code>SimilarityEntCreateDetails</code>.
    * The details of the model instance to create.
    * @alias module:model/SimilarityEntCreateDetails
    * @class
    * @param name {String} The sluggy-url-friendly-name of the instance to create.
    * @param loadFromStore {Boolean} Indicates if a pre-existing model with the specified name should be loaded from the model store. Usually set to False in which case a new model is created with details as specified.
    */

    constructor(name, loadFromStore) {
        

        
        

        this['name'] = name;this['load_from_store'] = loadFromStore;

        
    }

    /**
    * Constructs a <code>SimilarityEntCreateDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SimilarityEntCreateDetails} obj Optional instance to populate.
    * @return {module:model/SimilarityEntCreateDetails} The populated <code>SimilarityEntCreateDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityEntCreateDetails();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('similar_words')) {
                obj['similar_words'] = ApiClient.convertToType(data['similar_words'], ['String']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('word_manifold')) {
                obj['word_manifold'] = ApiClient.convertToType(data['word_manifold'], 'String');
            }
            if (data.hasOwnProperty('load_from_store')) {
                obj['load_from_store'] = ApiClient.convertToType(data['load_from_store'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The sluggy-url-friendly-name of the instance to create.
    * @member {String} name
    */
    name = undefined;
    /**
    * The longer existential description of this instance's purpose in life.
    * @member {String} desc
    */
    desc = undefined;
    /**
    * @member {Array.<String>} similar_words
    */
    similar_words = undefined;
    /**
    * The threshold below which words are not similar.
    * @member {Number} threshold
    */
    threshold = undefined;
    /**
    * @member {String} word_manifold
    */
    word_manifold = undefined;
    /**
    * Indicates if a pre-existing model with the specified name should be loaded from the model store. Usually set to False in which case a new model is created with details as specified.
    * @member {Boolean} load_from_store
    */
    load_from_store = undefined;








}


