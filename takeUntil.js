const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i=0; i< arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false
      }
  }
  return true
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) { // match = data1, x=> x < 0
  let matches = [];
  for (let i = 0 ; i < array.length; i++){
    let element = array[i]

    if (callback(element) === false){
      matches.push(element)
    }
    else{
      return matches
    }
  }
  return matches;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
/*

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const numbers = lighthouses.map((location) => {
  return location.length
})

console.log(numbers)
// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]


// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const evens = numbers.filter(function(num) {
//   return (num % 2 == 0);
// });
// console.log("Subset of even numbers:", evens);
*/

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.