/**
 * Author hannad rehman
 * this module is written to have all functions that will make api calls .
 * all api calls should be written here. you dont need to make calls in components
*/
import ApiPathNames from './ApiPathNames';
import ApiRequestMaker from './ApiRequestMaker';

/**
 * @class
 * @name ApiStore
 * @description this class stores all the api call methods .
 * all methods are static you can call them without instentiating
 * the class
 */
class ApiStore {
  /**
 * @name doLogin
 * @description function that will call login api to make the call,
 * @returns {Promise} returns the Api Promise
 */
  login() { // eslint-disable-line
    const loginApi = ApiPathNames.login;
    return ApiRequestMaker.fire({
      hostName: 'mockable',
      path: `${loginApi.version}/${loginApi.path}`,
      method: loginApi.method,
    });
  }
  /**
 * @name fetchProjectsForAManager
 * @description function that will call all-projects api and return
 * all the projects of a manager, it takes an argumet id
 * @param {number} id
 * @returns {Promise} returns the Api Promise
 */

fetchProjectsForAManager(managerId) { // eslint-disable-line
    const allProjectsApi = ApiPathNames.allProjects;
    return ApiRequestMaker.fire({
      hostName: 'mockable',
      path: `${allProjectsApi.version}/${allProjectsApi.path}/${managerId}`,
      method: allProjectsApi.method,
    });
  }

  /**
 * @name fetchProjectDetails
 * @description function that will call project details
 * @returns {Promise} returns the Api Promise
 */
fetchProjectDetails() { // eslint-disable-line
    const ProjectApi = ApiPathNames.projectDetails;
    return ApiRequestMaker.fire({
      hostName: 'mockable',
      path: `${ProjectApi.version}/${ProjectApi.path}`,
      method: ProjectApi.method,
    });
  }
}


export default new ApiStore();
