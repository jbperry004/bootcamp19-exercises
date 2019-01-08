const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  const split_string = str.split("");
  const rev_string = split_string.reverse();
  const res = rev_string.join("");
  return res;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  return Array.from(new Set(arr));
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let n = 1;
  let res = 1;
  while (n <= num) {
    res *= n;
    n++;
  }
  return res;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  if (arr1.length === arr2.length) {
    const res = [];
    arr1.map((element, index) => {
      const temp_arr = [];
      temp_arr.push(element, arr2[index]);
      res.push(temp_arr);
    });
    return res;
  }
  return -1;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`

  const arr1 = [];
  const arr2 = [];
  arr.map(arr_2 => {
    arr1.push(arr_2[0]);
    arr2.push(arr_2[1]);
  });
  return [arr1, arr2];
};

const new_index = (num, shift, len) => {
  return (num + shift) % len;
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const str_len = str.length;
  const res = new Array(str_len).fill(0);
  for (let i = 0; i < str_len; i++) {
    res.splice(new_index(i, num, str_len), 1, str[i]);
  }
  return res.join("");
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const hours = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
  ]

  const month = "January";
  const day = 7;
  const year = 2019;
  const hour = "eleven";
  const minute = "thirty-seven";
  return `"Today's date is ${month} ${day}th, ${year}. It is ${hour} ${minute} in the morning."`;
};
// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
