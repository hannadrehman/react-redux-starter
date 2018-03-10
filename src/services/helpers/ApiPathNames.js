/**
 * this module is written to set the configuration to store all the api end points .
*/
/**
 * @class
 * @name ApiPathNames
 * @description this class stores all the api endpoitns and path name details
 * every api to be consumed should be registered in this module first
 * you should never call api from any component.
 */
class ApiPathNames {
  /**
 * @name login
 * @static
 * @description Api to do Login
 */
  static get login() {
    return {
      method: 'GET',
      path: 'login',
      version: 'v1',
    };
  }
  /**
 * @name allProjects
 * @static
 * @description Api to fetch all projects for a managerid
 */
  static get allProjects() {
    return {
      method: 'GET',
      path: 'all-projects',
      version: 'v1',
    };
  }
  /**
 * @name projectDetails
 * @static
 * @description Api to fetch project details
 */
  static get projectDetails() {
    return {
      method: 'GET',
      path: 'project-details/pid',
      version: 'v1',
    };
  }
}


export default ApiPathNames;
