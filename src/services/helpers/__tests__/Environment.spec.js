import Environment from '../Environment';

describe('Unit Test Cases for Environment class', () => {
  it('should have valid environtment', () => {
    expect(Environment.name).toBeDefined();
  });
  it('should return Test  Env', () => {
    // expect(Device.client).toBe(true);
    expect(Environment._getEnvironment(true)).toBeDefined();//eslint-disable-line
  });
  it('should return Node  Env', () => {
    // expect(Device.client).toBe(true);
    expect(Environment._getEnvironment(false)).toBeDefined();//eslint-disable-line
  });
  it('should throw error of no env is provided', () => {
    // expect(Device.client).toBe(true);
    const erro = () => Environment._getEnvironment(null); //eslint-disable-line
    expect(erro).toThrow('Invalid Environment');
  });
});
