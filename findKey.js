// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



const findKey = function(obj, callback) {
  const names = Object.keys(obj);
  for (const i of names){
    // console.log(obj[i].stars)
    // console.log(i)
    if ((callback(obj[i]))=== true){
      return(i)
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

