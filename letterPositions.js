// const eqArrays = function(arr1, arr2){
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   for(let i=0; i< arr1.length; i++){
//       if (arr1[i] !== arr2[i]){
//         return false
//       }
//   }
//   return true
// }

const assertEqual = function(actual, expected) {
  if(actual !== expected){
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};



const letterPositions = function(sentence) {
  const results = {};
  let index =0;
    for(const letter of sentence){
      if(results[letter]){
        results[letter].push(index)
      } 
      else{
        results[letter] = [index]
      }
    index++
  }
  console.log(results)
};

assertEqual(letterPositions("hello"),{
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
});