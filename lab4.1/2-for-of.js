"use strict";

const sum = (...args) => {
  let value = 0;
  for (const num of args) {
    value += num;
  }
  return value;
};

module.exports = { sum };
