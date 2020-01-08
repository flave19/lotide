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

const middle = function (array){
  if (array.length % 2 != 0){
    let  baseindex = Math.floor(array.length/2)

    return array[baseindex]

  } else {
    let firstindex = Math.floor(array.length/2);
    let secondindex = firstindex -1;
    let firstvalue = array[firstindex];
    let secondvalue = array[secondindex];

    return [secondvalue, firstvalue]
  }
}

console.log(middle([1, 2, 3]))
// if Array.length = 2 
// return 0

// if Array.length > 2{
//   if Array.length % 2 = even{

//   }
//   else {odd

//   }
// }
