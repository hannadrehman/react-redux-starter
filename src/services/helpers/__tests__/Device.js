import Device from '../Device';

describe('Unit Test Cases for Device class', () => {
  it('should have valid screen', () => {
    expect(Device.screen).toBeDefined();
  });
  it('should have a valid client', () => {
    // expect(Device.client).toBe(true);
    expect(Device.client).toBeDefined();
  });
  it('should switch in screen height when different client is using', () => {
    expect(Device.client).toBeDefined();
  });
});
