const flatten = function (array){
 let emptyarr = []; 

  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])!== true) {
      emptyarr.push(array[i])
    } else {
      console.log("is array", array[i]);
      emptyarr = emptyarr.concat(array[i])
    }
  }
  return emptyarr
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))

  //     for( i = 0; i< arr.length;i++){
  //       if (!ARR ){
  //         emptyarr.push(arr[i])
  //       }
  //       else {
