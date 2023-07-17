const removeFromArray = function(array) {
  let filteredArray = array;
  let indexOfElement = -1;
  
  // no elements to remove given
  if (arguments.length < 2) {
    return array;
  }

  // check if array contains element and remove it
  for (let i = 1; i < arguments.length; i++) {
    indexOfElement = filteredArray.indexOf(arguments[i]);
    //console.log(indexOfElement);
    if (indexOfElement != -1) {
      filteredArray.splice(indexOfElement, 1); 
      //console.log(filteredArray);
    }
    else {
      continue;
    }
  }
  return filteredArray;
};

//removeFromArray([1, 2, 4, 5, 3], 2, 3, "test");

// Do not edit below this line
module.exports = removeFromArray;
