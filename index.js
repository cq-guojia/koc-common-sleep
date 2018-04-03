"use strict"

function KOCSleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  });
}

module.exports = KOCSleep;
