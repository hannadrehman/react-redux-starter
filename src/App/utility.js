import { ApiRequestMaker } from '../services';

const requestMaker = new ApiRequestMaker();


export const checkLoginBeforeInit = (user) => {
  if (user && user.isLoggedIn) {
    return true;
  }
  return false;
};
export function logUserIn() {
  return requestMaker.fire({
    hostName: 'default',
    method: 'GET',
    path: 'http://www.mocky.io/v2/5a1320bf2c0000fb1dace8cc',
    withCredentual: true,
  })
    .then(({ status, data, message }) => {
      if (status === 200 || status === 304) {
        return Promise.resolve(data);
      }
      return Promise.reject({ status, data, message }); //eslint-disable-line
    }, error => Promise.reject(error.data));
}
