'use strict';

//рішення довгі, тому тест не проходят, там ліміт по символам

const seq = (f) => {
    let funcs = [f]; 
   
    const chain = (g) => {
      funcs.push(g);
      return chain;
    };
  
    chain.valueOf = (x) => {
      return funcs.reduce((acc, fn) => fn(acc), x);
    };
  
    return chain;
  };

module.exports = { seq };
