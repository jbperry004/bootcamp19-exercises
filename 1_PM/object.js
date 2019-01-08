// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  if (!(typeof obj === 'object')) {
    console.log(`obj ${obj}`)
    return !!obj
  }
  for (let objs in obj){
    console.log(objs)
    return !!obj && hasFalsyValue(Object.values(objs))
  }
};

const val = {a: {b: {c:5}}}
// console.log(typeof [1,2,3] === 'object');
console.log(hasFalsyValue(val))