const sumAll = function(start, end) {
  // return ERROR if negative numbers or non-integer values given
  if (start < 0 || end < 0 || 
      !Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR"
  }
  
  let sum = 0;
  // switch start and end if given in incorrect order
  if (end < start) {
    let copy = start;
    start = end;
    end = copy;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

//console.log(sumAll(0, 4000));

// Do not edit below this line
module.exports = sumAll;
