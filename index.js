"use strict"

module.exports = (time) => {
  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null
      resolve();
    }, time)
  });
};
