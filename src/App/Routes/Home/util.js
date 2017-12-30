import { ApiRequestMaker } from '../../../services';

export default (config, callback) => {
  const requestMaker = new ApiRequestMaker();
  requestMaker.fire(config).then((success) => {
    callback(success.data);
  });
};
