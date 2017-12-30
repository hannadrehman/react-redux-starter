import ApiHosts from '../ApiHosts';

describe('Unit Test Case for ApiHosts Class', () => {
  it('should return a valid object of endpoints', () => {
    expect(ApiHosts.hosts).toBeDefined();
    // expect(endPoints.endPoints).toBe(true);
  });
  it('should return valid development hosts ', () => {
    expect(ApiHosts._hostsBasedOnEnv('development')).toBeDefined(); //eslint-disable-line
  });
  it('should return valid production hosts ', () => {
    expect(ApiHosts._hostsBasedOnEnv('production')).toBeDefined(); //eslint-disable-line
  });
  it('should throw error if any other env was provided ', () => {
    const err = () =>
       ApiHosts._hostsBasedOnEnv('hannad')//eslint-disable-line
    expect(err).toThrow('You need to specify the Application Environment, development,production');
  });
});

