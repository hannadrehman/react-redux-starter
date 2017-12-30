/**
 * Author hannad rehman
 * this module is written to set the configuration to make the api call
 * the configuration inludes creating the final service object based
 * on environment,and serviceConfig passed to it.
 * it will create final data that will used to make the api call.
*/

import ApiHosts from './ApiHosts';

/**
 * @class
 * @name ApiConfiguration
 * @params {object} serviceConfiguraton takes an object
 * with service configuration data like pathName,hostName,method,data,headers, etc
 * @description this class forms a final service object which has the url based on
 * env and name etc, method, data,params etc which will be used to make the api call
 * this class will set serviceObject that can be used anywhere.
 */
class ApiRequestMakerRequestConfig {
  /**
  * @constructor
  * @name initConfig
  * @params {object} serviceConfig is the configuration object for the api wich contains
  * all the usefull info about the api call to be made. the structure of the
  * serviceConfig is
  * @description constructor function that initializes the class
  */
  constructor(serviceConfig) {
    this.serviceObject = {};
    this.hosts = ApiHosts.hosts;
    this.initConfig(serviceConfig);
  }
  /**
  * @function
  * @name initConfig
  * @params {object} config is the configuration object for the api wich contains
  * all the usefull info about the api call to be made. the structure of the
  * serviceConfig is
  * const config={
        hostName:'login/wrapper/activitylog,default', -- see ApiHosts.js for all types.
        pathName:'/post, -- should only be the path name. hostname is already defined in
        method:'GET,PUT,POST,DELETE',
        params:{urlparams:urlparamValue},
        data:{post:service,data:values},
        headers:{rest:headers,if:required},
        withCredentials:true/false
      }
  * @description this function will initialize the class variable with all necessary information.
  * to make the final service object that can be used to make the service call.
  * the final service object ex
  *
   this.serviceObject = {
      url: abc.com/api/name,
      method: 'POST',
      params:  {},
      data:  [1,2,3],
      headers: {},
      withCredentials:  false,
      crossDomain: true,
    };
  */
  initConfig(config) {
    /**
     * ApiHosts.hosts will have all api host urls based on the environment set.
     */
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const url = ApiRequestMakerRequestConfig.generateUrl(config);

    this.serviceObject = {
      url,
      method: config.method || 'POST',
      params: config.params || {},
      data: config.data || {},
      headers: { ...defaultHeaders, ...config.headers },
      withCredentials: config.withCredentials || false,
      crossDomain: true,
    };
  }
  static generateUrl(config) {
    try {
      if (!config.hostName || config.hostName === 'default') {
        return config.path;
      }
      const temp = ApiHosts.hosts[config.hostName]; // temp hostname object
      if (temp) {
        return `${temp.protocol}://${temp.host}/${temp.basePath}/${config.path}`;
      }
      throw new Error('invalid host name');
    } catch (e) {
      throw e;
    }
  }
}

export default ApiRequestMakerRequestConfig;
