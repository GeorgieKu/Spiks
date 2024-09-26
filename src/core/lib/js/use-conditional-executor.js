/**
 * @typedef {Object} TProps
 * @property {function: boolean} resolveCondition
 * @property {function: boolean} rejectCondition
 * @property {function(*): void} handleResolve
 * @property {function(*): void} handleReject
 */

/**
 * @param {TProps} props
 * @returns {function(*): void}
 *
 * @example
 * const BP_PAD = 1024;
 *
 * const slider = null;
 *
 * const createSlider = () => {
 *   const slider = ('slider instance');
 *   console.log('create slider');
 * };
 *
 * const destroySlider = () => {
 *    const slider = null;
 *    console.log('destroy slider');
 * };
 *
 * const mountSliderCondition = () => {
 *   return !slider && window.innerWidth < BP_PAD;
 * }
 *
 * const unmountSliderCondition = () => {
 *   return slider && window.innerWidth >= BP_PAD;
 * }
 *
 * const mountSlider = useConditionalExecutor({
 *   resolveCondition: mountSliderCondition,
 *   rejectCondition: unmountSliderCondition,
 *   handleResolve: createSlider,
 *   handleReject: destroySlider,
 * });
 *
 * window.addEventListener('resize', mountSlider);
 */
const useConditionalExecutor = (props) => {
  const {
    resolveCondition,
    rejectCondition,
    handleResolve,
    handleReject,
  } = props;

  return (...args) => {
    if (resolveCondition && resolveCondition()) {
      handleResolve(...args);
      return;
    }

    if (rejectCondition && rejectCondition()) {
      handleReject(...args);
    }
  };
};

export default useConditionalExecutor;
