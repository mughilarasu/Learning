//const input = document.querySelector("inputTextDebounceThrottle");

const divMouseElement = document.querySelector("#divDebounceThrottle");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(() => {
  incrementCount(debounceText);
});
const updateThrottleText = throttle(() => {
  incrementCount(throttleText);
}, 100);

function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

divMouseElement.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
