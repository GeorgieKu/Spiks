/**
 * @param {HTMLElement} element
 * @param {string[]} cssClasses
 * @return {Promise<HTMLElement>}
 *
 * @example
 * promisifyCssAnimation(document.querySelector('.foo'), ['fade-out'])
 *   .then((el) => { el.remove(); })
 *   .catch(console.error))
 */
const promisifyCssAnimation = (element, cssClasses) => {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(new Error('Element not found'));
    }

    element.classList.add(...cssClasses);

    const onAnimationEnd = (event) => {
      event.stopPropagation();
      element.classList.remove(...cssClasses);

      resolve(element);
    };

    element.addEventListener('animationend', onAnimationEnd, { once: true });
  });
};

export default promisifyCssAnimation;
