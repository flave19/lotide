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

const assertEqual = function(actual, expected) {
  if(actual !== expected){
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

const without = function(source,itemsToRemove){
  let arr = [];
  for(let i = 0; i < source.length;i++){
    let foundMatch = false;

    for( let j = 0; j <itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]){
        foundMatch = true;
      }
    }

    if (!foundMatch) {
      arr.push(source[i])
    }
  } 
  return arr 
}
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
// const itemsToRemove =

// compare source and itemstoremove 

// loop through array to check if values match 

// if 