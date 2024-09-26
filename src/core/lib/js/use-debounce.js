/**
 * @param { function(*) } callee
 * @param { number } timeoutMs
 *
 * @return { function(*) }
 */
const useDebounce = (callee, timeoutMs) => {
  return function perform(...args) {
    const previousCall = perform.lastCall;

    perform.lastCall = Date.now();

    if (previousCall && perform.lastCall - previousCall <= timeoutMs) {
      clearTimeout(perform.lastCallTimer);
    }

    perform.lastCallTimer = setTimeout(
      () => {
        return callee(...args);
      },
      timeoutMs,
    );
  };
};

export default useDebounce;
