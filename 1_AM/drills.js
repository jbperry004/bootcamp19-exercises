const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  return str.split(" ")
  // a function which converts a multi-word string into an array of words
};

const reverse = str => {
  return str.split("").reverse().join("")
  // a function which reverses the string
};


const uniqueOnes = arr => {
  return [...new Set(arr)];
  // a function which returns the inputted array without duplicate elements
};

let total = 1; 
const factorial = num => 
   {
    for(let i = 1; i <= num; i++)
    {
      total = total * i;
    }
  return total
  // a function which returns the factorial of a positive integer
};
let arr3 = [];
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return -1
  else 
   for(let i = 0; i < arr1.length; i++) {
    arr3.push([arr1[i], arr2[i]]) 
   }
   return arr3
  // a function which combines two arrays into an array of 2-element arrays and returns -1

  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

let arr1 = [];
const unzip = arr => {
  for(let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  return arr1, arr2 
  // a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  // new Date; getMonth, getYear, etc.
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// assert(tokenize("Hello World") === [ 'Hello', 'World' ]);
assert (reverse("Hello") === 'olleH');
assert (factorial(3) === 6)

// asssert (reverse("3df") === "fd3")
