const button = document.querySelector('.increment__btn');
const btnpressed = document.querySelector('.increment__pressed');
const debouncePressed = document.querySelector('.increment__debounce');

let pressedCount = 0;
let debounceCount = 0;

button.addEventListener('click', () => {
  btnpressed.textContent = ++pressedCount;
  debounceFnCall('text');
  throttling();
});

const myDebounce = (func, delay) => {
  let timer;
  console.log('my Debounce called' + timer);
  return function (...args) {
    clearTimeout(timer);
    console.log('return fn called' + timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFnCall = myDebounce(increaseCount, 1000);

// debounceFnCall =  function (...args) {   --> 'text' is passed to this argument
//   clearTimeout(timer);                   --> if timer exists clear it.
//   timer = setTimeout(() => {
//     func(...args);
//   }, delay);
// };

function increaseCount(text) {
  console.log(text);
  debouncePressed.textContent = ++debounceCount;
}

/* Using Load Ash library

const debounceLoadAshFn = _.debounce(() => {
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

const throttling = myThrottle(() => {
  debouncePressed.textContent = ++debounceCount;
}, 1000);
