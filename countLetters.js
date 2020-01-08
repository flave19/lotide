const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

const countLetters = function(x){
input = x.replace(/ /g,'')
let counter = {};
  for(const letter of input){
    if (counter[letter]){
      counter[letter] += 1
    }
    else {
      counter[letter] = 1
    }

  }
  return counter
}

console.log(countLetters("lighthouse in the house"))