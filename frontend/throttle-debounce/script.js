function throttle(delay, callback) {
  let last = 0;

  return function () {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;

    callback();
  };
}

function debounce(delay, callback) {
  let timer = null;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

const onThrottleClick = throttle(500, () => {
  console.log("throttle");
});

const onDebounceClick = debounce(500, () => {
  console.log("debounce");
});
