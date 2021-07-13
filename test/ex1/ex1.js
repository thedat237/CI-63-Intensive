function adjacentElementsProduct(inputArray) {
    var max = inputArray[0]*inputArray[1];
    for(var i=0;i<inputArray.length-1;i++){
        if(inputArray[i]*inputArray[i+1] > max){
          max = inputArray[i]*inputArray[i+1];
        }
    }
  return max;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));



