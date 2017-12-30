/*
* Author hannad rehman.
* this module is written to get all the device related information
* the device which the end user is using.
* the device info like browser name, screen width,height etc,
* we use detect-browser library to do all that
*/
import { detect, detectOS } from 'detect-browser';
/**
 * @class
 * @name Device
 * @description this class contains all the necessary information
 * about the users device, like browser name, width,height etc.
 */
class Device {
  /**
 * @function
 * @name screen
 * @description
 * static function is used detect the device screen and
 * set the screen size and width in class variable
 * @returns {object} width and height
 */
  static get screen() {
    const screenWidth = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

    const screenHeight = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
    return {
      width: screenWidth,
      height: screenHeight,
    };
  }
  /**
 * @function
 * @name client
 * @description
 * static function is used to detect the browser and OS
 * currently this function is expected to support all desktop browsers
 * only. later we might add support to the mobile browsers also.
 */
  static get client() {
    const browser = detect();
    const os = detectOS();
    return {
      browser,
      os,
    };
  }
}

export default Device;
