export default function logger({ getState }) {
  return next => (action) => {
    console.log('%c Previous State : ', 'background: #222; color: #bada55', getState()); // eslint-disable-line no-console
    console.log('%c Action Dispatched : ', 'background: #222; color: orange', action); // eslint-disable-line no-console
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    console.log('%c Next State : ', 'background: #222; color: white', getState()); // eslint-disable-line no-console
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
