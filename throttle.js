/*
const throttleLoadAshFn = _.throttle(() => {
  debouncePressed.textContent = ++debounceCount;
}, 1000);

*/

const myThrottle = (fn, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};
