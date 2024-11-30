"use strict";

const max = (matrix) => {
  let maxValue = matrix[0][0];
  for (const row of matrix) {
    for (const cell of row) {
      if (cell > maxValue) {
        maxValue = cell;
      }
    }
  }
  return maxValue;
};

module.exports = { max };
