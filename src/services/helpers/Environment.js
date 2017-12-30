/*
* Author hannad rehman.
* this module is written to get app  environment name.
* we have 2 env's for the application
* 1. development
* 3. production
* based on these env's some configuration happen like what
* Api end points to select what source to select for logging etc.
* now the problem is with JEST testing tool a new env came
* 4. test
* because of which the env gets set to test also
* we were unable to do proper testing because
* NODE_ENV changed to test. so i added a custom Env variable in the start scripts
* TEST_ENV to process.env . which we will use to determine
* what the env is actually.
* TEST_ENV has 2 values
* 1. developmemt
* 2. production
* this module finally returns the env which has to be used.
*/

/**
 * @class
 * @name Environment
 * @description this class will have only one static method
 * which will return the final environment of the application
 */

class Environment {
  static get name() {
    // check if is test.
    const isTestEnv = process.env.NODE_ENV.toLowerCase().trim() == 'test'; //eslint-disable-line
    return Environment._getEnvironment(isTestEnv);//eslint-disable-line
  }
  /**
* @function
* @name getEnvironment
* @params {boolean} isTest.
* @description based on isTest bool it decides to return NODE_ENV or TEST_ENV
* @return {string} return NODE_ENV or TEST_ENV.
*/
  static _getEnvironment(isTest) {
    if (typeof isTest !== 'boolean') {
      throw new Error('Invalid Environment');
    }
    if (isTest) {
      // if is test return TEST_ENV
      return process.env.TEST_ENV.toLowerCase().trim(); //eslint-disable-line
    }
    // else retunr NODE_ENV
      return process.env.NODE_ENV.toLowerCase().trim()  //eslint-disable-line
  }
}
export default Environment;
