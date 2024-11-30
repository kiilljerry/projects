"use strict";

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    try {
      return fns.reduceRight((acc, fn) => {
        if (typeof fn !== "function") {
          throw new Error("All compose arguments should be functions");
        }
        return fn(acc);
      }, x);
    } catch (error) {
      handlers.forEach((handler) => handler(error));
      return null;
    }
  };

  composed.on = (name, handler) => {
    if (name === "error") {
      handlers.push(handler);
    }
  };

  return composed;
};

module.exports = { compose };
