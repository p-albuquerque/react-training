/* 
    MAP: return a array with the same amount of elements which the original, but with all or part of this values modified (can be different type)
    the behavior of this modification happens throught a callback function (currentValue, index, completeArray).
*/

const numbers = [2, 3, 4, 5, 7, 10, 11, 6, 3, 5];
const doubleNumbers = numbers.map(currNumber => currNumber * 2);

console.log(numbers);
console.log(doubleNumbers);

/* 
    FILTER: return a array with all or less elements which the original, 
    by a filter defined throught boolean condition in callback function(currentValue, index, completeArray).
*/

const evenNumbers = numbers.filter(currNumber => currNumber%2 == 0);

console.log(evenNumbers);

/* 
    REDUCE: return a single element, resulting by a callback function behavior (previousValueIterator/accumulator, currentValue, index, completeArray).
*/

const sumNumbers = numbers.reduce((currSum, currValue) => currSum + currValue);

console.log(sumNumbers);

/*
    SLICE: return a array with part of elements by original, throught delimiter arguments (start, end)
*/

const delimiterNumbers = numbers.slice(2); // only elements from index 2
const delimiterNumbers2 = numbers.slice(4, 8) // only elements between index 4 to index 7
const delimiterNumbers3 = numbers.slice(-2); // only two last elements
const delimiterNumbers4 = numbers.slice(4, -3); // only elements from index 4 (except 3 last elements)


console.log(delimiterNumbers);
console.log(delimiterNumbers2);
console.log(delimiterNumbers3);
console.log(delimiterNumbers4);
