/*
    PRIMITIVE: when we assign to a variable "varA"  a primitive type variable "varB", it will copy the value
    but both variables points to different place in memory.
    EX: numbers, string, boolean

    REFERENCED: When do same, but "varB" contains a reference type element, 
    both varA and varB stores a pointer to the same place in memory
    EX: object, array

    OBS: for copy a reference element without this behavior, use SPREAD 
*/

// PRIMITIVE
let num1 = 3;
let num2 = num1;

console.log(num1, num2);

num1 = 4; // replace only one of them (only this is modified)

console.log(num1, num2);

// REFERENCE
let person = {
  name: "Max",
};
let secondPerson = person;

console.log(person, secondPerson);

person.name = "Juan"; // replace only one of them (both is modified)

console.log(person, secondPerson);
