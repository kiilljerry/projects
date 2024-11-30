"use strict";

const pipe = (...fns) => {
  if (fns.some((fn) => typeof fn !== "function")) {
    throw new Error("All compose arguments should be functions");
  }

  return (x) => {
    return fns.reduce((acc, fn) => fn(acc), x); // Применяем все функции
  };
};

module.exports = { pipe };
