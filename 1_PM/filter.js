// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

// defines the basis of the filter
const multOf7 = el => {
  return (!(el % 7) && Number.isInteger(el)) 
};

// creates our OWN filter function, does not use the native filter
Array.prototype.filter = function(fun) {
  const filtered = [];
    this.forEach(element => {
      if (fun(element)) {
        filtered.push(element)
      }
    })
  return filtered
};

// calls our CREATED filter function on array !! 
const newArr = arr.filter(multOf7);

console.log(newArr);
