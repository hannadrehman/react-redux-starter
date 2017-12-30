import ApiRequestConfig from '../ApiRequestConfig';

describe('Unit Test Cases for ApiRequestConfig', () => {
  it('should form the service config object from sourceObj', () => {
    const serviceConfig = {
      path: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      data: {},
      headers: {},
      withCredentials: false,
    };
    const expectedOutPut = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      params: {},
      data: {},
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      crossDomain: true,
    };
    const apiConfig = new ApiRequestConfig(serviceConfig);
    expect(apiConfig.serviceObject).toBeDefined();
    expect(apiConfig.serviceObject).toEqual(expectedOutPut);
  });
  it('should form the service config object from sourceObj and take default values', () => {
    const serviceConfig = {
      path: 'http://jsonplaceholder.com/posts',
    };
    const expectedOutPut = {
      url: 'http://jsonplaceholder.com/posts',
      method: 'POST',
      params: {},
      data: {},
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      crossDomain: true,

    };
    const apiConfig = new ApiRequestConfig(serviceConfig);
    expect(apiConfig.serviceObject).toBeDefined();
    expect(apiConfig.serviceObject).toEqual(expectedOutPut);
  });
  it('should add hostname,method to service Config from env', () => {
    const serviceConfig = {
      path: 'http://jsonplaceholder.com/posts',
      hostName: 'default',
    };
    const apiConfig = new ApiRequestConfig(serviceConfig);
    const expectedOutPut = {
      url: `${apiConfig.hosts[(!serviceConfig.hostName) ? 'default' : serviceConfig.hostName]}http://jsonplaceholder.com/posts`,
      method: 'POST',
      params: {},
      data: {},
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      crossDomain: true,
    };
    expect(apiConfig.serviceObject).toBeDefined();
    expect(apiConfig.serviceObject).toEqual(expectedOutPut);
  });
  it('should return correct url when service config is provided', () => {
    const serviceConfig = {
      path: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      data: {},
      headers: {},
      withCredentials: false,
    };
    expect(ApiRequestConfig.generateUrl(serviceConfig)).toEqual('https://jsonplaceholder.typicode.com/posts');
  });
  it('should return correct url correct host name', () => {
    const serviceConfig = {
      path: 'posts',
      hostName: 'wrapper',
    };
    expect(ApiRequestConfig.generateUrl(serviceConfig)).toBeDefined();
  });
  it('should throw error when wrong hostname is provided', () => {
    const serviceConfig = {
      path: 'posts',
      hostName: 'hannad',
    };
    const err = () => ApiRequestConfig.generateUrl(serviceConfig);
    expect(err).toThrow('invalid host name');
  });
  it('should throw error when no config is provided', () => {
    const err = () => ApiRequestConfig.generateUrl();
    expect(err).toThrow('');
  });
});
