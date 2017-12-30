/**
 * author hannad rehman
 * this module is written to store all utility functions
 * that are commonly performed in the array
 * like find if object exists
 * get index of the object
 * remove object from array etc.
 */

/**
 * @class
 * @name ArrayUtils
 * @description this class will contain all the helper methods for array
 * operations.the idea is to validate data before performing the operations
 * and ALWAYS RETURN THE NEW VALUE NEVER MUTATE THE PARAMS
 */
class ArrayUtils {
  /**
 * @function
 * @name isPresent
 * @static
 * @params {object|primitive} item
 * @params {array} source
 * @params {string} key : extra comparator if item is object
 * @description this function will take item and check weather it
 * is present in the source array.if is present return true
 * if is not present return false.
 * if exception occured return false
 * it is present if index>-1
 * @returns {boolean}
 */
  static isPresent(item, source, key = null) {
    try {
      // validate the arguments
      if (item && source) {
        let index;
        let isPresent = false;
        // if item is object then we use different approach
        if (typeof item !== 'object' && typeof source !== 'object') {
          // directly get index
          index = source.findIndex(x => x === item);
          if (index !== -1) {
            isPresent = true;
          } else {
            isPresent = false;
          }
        } else if (typeof item !== 'object' && typeof source === 'object') {
          // key is mandatory
          if (key) {
            index = source.findIndex(x => x[key] === item);
            if (index !== -1) {
              isPresent = true;
            } else {
              isPresent = false;
            }
          } else {
            throw new Error('Key is mandatory to compare');
          }
        } else if (key) {
          index = source.findIndex(x => x[key] === item[key]);
          if (index !== -1) {
            isPresent = true;
          } else {
            isPresent = false;
          }
        } else {
          throw new Error('Key is mandatory to compare');
        }
        return isPresent;
      }
      return false;
    } catch (e) {
      throw new Error('Some error occured while comparing error');
    }
  }
  /**
 * @function
 * @name removeElementFromArray
 * @static
 * @params {object|primitive} item
 * @params {array} source
 * @params {string} key : extra comparator if item is object
 * @description this function will itrate over array find the element
 * remove it and return a new array with that element less.
 * we are not mutating params. because arrays are references types
 * make changes here it will get changes in the source itself. which
 * may lead to bugs. that why are we copy the array and return the new one.
 * @returns {boolean}
 */
  static removeElementFromArray(item, source, key = null) {
    try {
    // validate the arguments
      if (item && source) {
        const copyArray = [...source];
        let index;
        // if item is object then we use different approach
        if (typeof item !== 'object' && typeof source !== 'object') {
        // directly get index
          index = source.findIndex(x => x === item);
          if (index !== -1) {
            copyArray.splice(index, 1);
          }
        } else if (typeof item !== 'object' && typeof source === 'object') {
        // key is mandatory
          if (key) {
            index = source.findIndex(x => x[key] === item);
            if (index !== -1) {
              copyArray.splice(index, 1);
            }
          } else {
            throw new Error('Key is mandatory to compare');
          }
        } else if (key) {
          index = source.findIndex(x => x[key] === item[key]);
          if (index !== -1) {
            copyArray.splice(index, 1);
          }
        } else {
          throw new Error('Key is mandatory to compare');
        }
        return copyArray;
      }
      return source;
    } catch (e) {
      throw new Error('Some error occured while removing elem from array');
    }
  }
}
export default ArrayUtils;
