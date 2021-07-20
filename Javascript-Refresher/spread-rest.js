/*
    SPREAD: Used to split up all elements and assign each one in another one(s) (new array or unattached variable)
*/

// ARRAY
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];

console.log(oldArray);
console.log(newArray);

// OBJECT
const oldObject = {
  name: "Fulano",
  age: 27,
};

const newObject = {
  ...oldObject,
  newProp: 5,
};

console.log(oldObject);
console.log(newObject);

/*
    REST: Used to merge all separeted elements to a array (often used in function arguments)
*/

const specificFilter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(specificFilter(1, 2, 3)); // this elements is passed independently and, in function scope, becomes a array (args)
