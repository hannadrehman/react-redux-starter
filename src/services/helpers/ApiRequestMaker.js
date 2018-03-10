/*
* Author hannad rehman.
* this module is written to make api calls with axios module .
* which will have methods that will make server calls with axios()
* and filter the data to make it clean and usable form.
* ApiRequestMaker will be exported as Default Class.
*/
import axios from 'axios';
import ApiRequestConfig from './ApiRequestConfig';
import HTTPStatusCodes from './HTTPStatusCodes';
/**
 * @class
 * @name ApiRequestMaker
 * @params {object} serviceConfiguraton takes an object
 * with service configuration data like url,baseurl,method,data,headers, etc
 * @description this class is used to make api calls.
 * to make api calls all necessary info is obtained from ApiRequestConfig
 * class serviceConfiguration is passes to new ApiRequestConfig() class
 * that stores all necessary info.like api endpoints
 * sourceNames, appName, environment etc.
 * this class has fire() function that make the api call and store and return
 * the data from the service as a promise
 * this class has filter() function which will filter the request data and return a
 * clean usable data
 * structure
 */
class ApiRequestMaker {
  constructor() {
    this.apiConfig = null;
    this.status = null;
    this.message = null;
    this.responseData = null;
  }
  /**
  * @function
  * @name fire
  * @params serviceConfig
  * @description this function is used to call an api with axios ()
  * this method which returns the promise.all the necessary data required to make
  * the call is stored in the super class variables.this.url,method,data,headers etc.
  * when we get the data from the api. filter() will be called to filter the data
  * and clean the data recieved from the api because there is alot of useless info which we
  * dont really need. structure of serviceConfig
  * const serviceConfig={
      baseUrl:'login/wrapper/activitylog,default', -- see api.config.js for all types.
        url:'/post, -- should only be the path name. base url is already defined in api.config.js
        method:'GET,PUT,POST,DELETE',
        params:{urlparams:urlparamValue},
        data:{post:service,data:values},
        headers:{rest:headers,if:required},
        withCredentials:true/false
      }
  * FINALLY we are returning the promise from this function which has the filtered data
  * @return {object} returns a promise which will have the filtered Data.}
  */
  fire(serviceConfig) {
    let status;
    let message;
    let data;
    // get api endpoints based on environment and config
    this.apiConfig = new ApiRequestConfig(serviceConfig);
    // based on env endpoints will be slected
    //  apicofig.serviceObject has configured service configuration based on env and hostname
    return axios(this.apiConfig.serviceObject).then((response) => {
      // filter data
      [status, message, data] = this.filter(response, 'success'); // will extract usefull data only
      return Promise.resolve({ status, message, data });
    }, (error) => {
      // filterData
      [status, message, data] = this.filter(error, 'failure');
        return Promise.reject( { status, message, data } ); //eslint-disable-line
    });
  }
  /**
  * @function
  * @name filter
  * @params {object} data the service response data returned from axios promise.
  * @params {string} type type of the service response. weather it was a success or failure
  * @description this function is used to filter the data based on what server has sent.
  * usually in a service response there is a lot of useless data which we dont want to process
  * every time. thats why this function is written to make that processing to be written only
  * once.the logic is simple to read from the service data.and give appropriate message to it
  * if exception occures. return 400 bad request.
  * @return {object} retun object will contain {status,message,data}
  */
  filter(data, type) {
    // copy the param data . so that we can mutate it.
    const copyData = { ...data };
    // if there is no status and message is network error. set status = -1
    if (!copyData.status) {
      copyData.status = -1;
      copyData.response = { status: -1 };
    }
    const status = (type === 'success') ?
      parseInt((copyData.status), 0) :
      parseInt((copyData.response.status), 0);
      // check if status codes exits in our lib
    this.status = (HTTPStatusCodes.statusCodes[status]) ? status : 400;
    // get message based on the code.
    this.message = (HTTPStatusCodes.statusCodes[status]) ? HTTPStatusCodes.statusCodes[this.status] : 'BAD_REQUEST';
    this.responseData = copyData.data;
    return [this.status, this.message, this.responseData];
  }
}
export default ApiRequestMaker;
// export default makeRequest;
