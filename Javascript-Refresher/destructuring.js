/*
    Extract some(or all) array(or object) elements and store them in variables
*/

// ARRAY
const newArray = ["Fulano", "Cicrano"];
const [newName1, newName2] = newArray;

console.log(newName1, newName2);

// OR directly declarate
const [name1, name2] = ["John", "Doe"];

console.log(name1, name2);

// OBJECT
const object1 = {
  firstName: "Max",
  age: 28,
};
const { firstName } = object1;

console.log(firstName);

// OR directly declarate
const {name11} = {name11: 'Maximilian', age: 28};

console.log(name11);
