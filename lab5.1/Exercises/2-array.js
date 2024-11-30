'use strict';


const array = () => {

    let arr = [];
    const obj = (i) => {
      if (i === undefined) {
        return arr;
      }
      return arr[i];
    };

    obj.push = (value) => {
      arr.push(value);
    };
  
    obj.pop = () => {
      return arr.pop();
    };
  
    return obj;
  };
  

module.exports = { array };
