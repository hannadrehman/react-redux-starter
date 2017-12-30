/**
 * Author hannad rehman
 * this module is written to set the configuration to store all the api end points .
*/
/**
 * @class
 * @name ApiStore
 * @static
 * @description this class stores all the api endpoitns and path name details
 * every api to be consumed should be registered in this module first
 */
class ApiStore {
  /**
 * @static
 * @name autocompleteTopics
 * @params {string} keywords
 * @type url parameter
 * @method GET
 * @description API to fetch Autocomplete Topics only. this will be used
 * to fetch topics for tagging a question etc.
 * it requires a url param <keyword> for which the autocomplete is to be
 * fetched ex v1/topics/autocomplete/java  .
 * will fetch for java only.
 */
  static get autocompleteTopics() {
    return {
      method: 'GET',
      path: 'topics/autocomplete',
      version: 'v1',
    };
  }
}


export default ApiStore;
