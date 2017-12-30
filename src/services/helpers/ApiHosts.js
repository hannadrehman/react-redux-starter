/**
 * this module is written to get API Hosts based on
 * the application environment
 * we have development and production environments
 * and based on these environments we will have different
 * Hosts to to call from
 * Host is the url where the api is hosted
 * ex www.api.google.com/api/getname
 * www.api.google.com/api/ is the host
 * getname is pathname
 */
import Environment from './Environment';
/**
 * @class
 * @name ApiHosts
 * @params environment
 * @description this class is used to get the API Hosts based
 * the environment:production,development etc.
 * this class has a static method get Hosts based on the env
 * Environment
 */
class ApiHosts {
  /**
  * @function
  * @name host
  * @params {null}
  * @description this function will returnn host variable
  * based on the environment passed. this is a static method because it is
  * independent of the class. and same instance should be used anywhere called.
  */
  static get hosts() {
    return ApiHosts._hostsBasedOnEnv(Environment.name); // eslint-disable-line
  }
  static _hostsBasedOnEnv(env) {
    try {
      switch (env) {
        case 'development':
          return {
            wrapper: {
              protocol: 'http',
              host: 'wrapper-server:8080',
              basePath: 'api',
            },
            activityLogger: {
              protocol: 'http',
              host: 'dev-act',
              basePath: 'api',
            },
            default: '',
          };
        case 'production':
          return {
            wrapper: {
              protocol: 'http',
              host: 'dev-wrapper',
              basePath: 'api',
            },
            activityLogger: {
              protocol: 'http',
              host: 'dev-act',
              basePath: 'api',
            },
            default: '',
          };
        default:
          throw new Error('You need to specify the Application Environment, development,production');
      }
    } catch (e) {
      throw new Error('You need to specify the Application Environment, development,production');
    }
  }
}
export default ApiHosts;
