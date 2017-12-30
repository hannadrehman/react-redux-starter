
class ApiRequestMaker {
  constructor() {
    this.apiConfig = null;
    this.status = null;
    this.message = null;
    this.responseData = null;
  }
  fire(serviceConfig) {
    this.status = 'mock';

    // get api endpoints based on environment and config
    try {
      return new Promise((resolve, reject) => {
        const { expectedData } = serviceConfig;
        const { data } = { expectedData };
        const shouldResolve = { expectedData };

        process.nextTick(() => { // eslint-disable-line
          if (shouldResolve) {
            return resolve({ status: data.status, message: data.message, data: data.rawData });
          }
          return reject({ error: data.error, errorData: { status: data.status, message: data.message, data: data.rawData } }); //eslint-disable-line
        }); // eslint disable-line
      });
    } catch (e) {
      throw e;
    }
  }
}
export default ApiRequestMaker;
// export default makeRequest;
