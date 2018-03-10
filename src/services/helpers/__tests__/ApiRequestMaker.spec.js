import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ApiRequestMaker from '../ApiRequestMaker';
import HTTPStatusCodes from '../HTTPStatusCodes';

describe('Unit Test Cases for ApiRequestMaker class fire method', () => {
  jest.mock('../../../../__mocks__/ApiRequestMaker');
  const requestMaker = new ApiRequestMaker();

  it('promise works', () => {
    const dataToBeCalled = {
      path: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      data: {},
      headers: {},
      withCredentials: false,
    };
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(dataToBeCalled.path).reply(200, []);
    expect(requestMaker.fire(dataToBeCalled)).resolves.toBeDefined();
  });
  it('should be a successfull api call', () => {
    const dataToBeCalled = {
      path: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      data: {},
      headers: {},
      withCredentials: false,
    };
    const expectedData = {
      status: 200,
      data: [1, 2, 3, 4, 5],
      message: 'OK',
    };
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(dataToBeCalled.path).reply(expectedData.status, expectedData.data);
    const apiPromise = requestMaker.fire(dataToBeCalled);
    expect(apiPromise).resolves.toEqual(expectedData);
  });
  it('should be a failure api call', () => {
    const dataToBeCalled = {
      url: 'https://jsonplaceholder.typicode.com/postsx',
      method: 'GET',
      data: {},
      headers: {},
      withCredentials: false,
    };
    const expectedData = {
      status: 404,
      data: null,
      message: 'NOT_FOUND',
    };
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(dataToBeCalled.url).reply(expectedData.status, expectedData.data);
    const apiPromise = requestMaker.fire(dataToBeCalled);
    expect(apiPromise).rejects.toBeDefined();
  });
  it('should throw error', () => {
    const err = () => requestMaker.fire(null);
    expect(err).toThrow();
  });
});

describe('Unit Test Cases for ApiRequestMaker data filter class', () => {
  const requestMaker = new ApiRequestMaker();
  let mockData;
  let status;
  let message;
  let data;
  const httpCodes = HTTPStatusCodes.statusCodes;
  it('should filter data from service when success', () => {
    mockData = {
      status: 200,
      response: {
        status: 200,
        data: {},
      },
      data: {},
      message: httpCodes[200],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should filter data from service when failure', () => {
    mockData = {
      status: 200,
      response: {
        status: 200,
        data: {},
      },
      data: {},
      message: httpCodes[200],
    };
    [status, message, data] = requestMaker.filter(mockData, 'faliure');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should retun Network Error when exception', () => {
    mockData = null;
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(-1);
    expect(message).toBe(httpCodes['-1']);
    expect(data).toBe(undefined);
  });
  it('should select -1 if status is not provided', () => {
    mockData = {
      status: null,
      response: {
        status: null,
        data: {},
      },
      data: {},
      message: httpCodes['-1'],
    };
    [status, message, data] = requestMaker.filter(mockData, 'faliure');
    expect(status).toBe(-1);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return NETWORK_ERROR', () => {
    mockData = {
      status: -1,
      response: {
        status: -1,
        data: {},
      },
      data: {},
      message: httpCodes['-1'],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return NO_CONTENT', () => {
    mockData = {
      status: 204,
      response: {
        status: 204,
        data: {},
      },
      data: {},
      message: httpCodes[204],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return CACHED', () => {
    mockData = {
      status: 304,
      response: {
        status: 304,
        data: {},
      },
      data: {},
      message: httpCodes[304],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return BAD_REQUEST', () => {
    mockData = {
      status: 400,
      response: {
        status: 400,
        data: {},
      },
      data: {},
      message: httpCodes[400],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return UNAUTHORIZED', () => {
    mockData = {
      status: 401,
      response: {
        status: 401,
        data: {},
      },
      data: {},
      message: httpCodes[401],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return FORBIDDEN', () => {
    mockData = {
      status: 403,
      response: {
        status: 403,
        data: {},
      },
      data: {},
      message: httpCodes[403],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return NOT_FOUND', () => {
    mockData = {
      status: 404,
      response: {
        status: 404,
        data: {},
      },
      data: {},
      message: httpCodes[404],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return CONFLICT', () => {
    mockData = {
      status: 409,
      response: {
        status: 409,
        data: {},
      },
      data: {},
      message: httpCodes[409],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return INTERNAL_SERVER_ERROR', () => {
    mockData = {
      status: 500,
      response: {
        status: 500,
        data: {},
      },
      data: {},
      message: httpCodes[500],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return SERVICE_UNAVAILABLE', () => {
    mockData = {
      status: 503,
      response: {
        status: 503,
        data: {},
      },
      data: {},
      message: httpCodes[503],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(mockData.status);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return BAD_REQUEST', () => {
    mockData = {
      status: 777,
      response: {
        status: 777,
        data: {},
      },
      data: {},
      message: httpCodes[400],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(400);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
  it('should return BAD_REQUEST if status is wrong', () => {
    mockData = {
      status: 'NaN',
      response: {
        status: 'NaN',
        data: {},
      },
      data: {},
      message: httpCodes[400],
    };
    [status, message, data] = requestMaker.filter(mockData, 'success');
    expect(status).toBe(400);
    expect(message).toBe(mockData.message);
    expect(data).toBe(mockData.data);
  });
});
