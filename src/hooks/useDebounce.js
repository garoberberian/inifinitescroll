import React from "react";

function useDebounce(callback, ms) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, ms);
  };
}

export default useDebounce;
