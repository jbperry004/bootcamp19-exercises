// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]
const assert = require("assert");

const arr = [0, 1, 2, 3, 4];

// triples any given element
const triple = el => {
  return el * 3
};

// creates our OWN map function
Array.prototype.map = function(fun) {
  const mapped = [];
  this.forEach(element => {
    mapped.push(fun(element))
  })
  return mapped
};

// calls our OWN map function on the array
console.log(arr.map(triple));
