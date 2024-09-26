/**
 * @param { function(*) } callee
 * @param { number } timeoutMs
 *
 * @return { function(*) }
 */
const throttle = (callee, timeoutMs) => {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeoutMs);
  };
};

export default throttle;
