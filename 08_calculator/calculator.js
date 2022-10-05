const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(anArray) {
  return anArray.reduce(add,0);
};

const multiply = function(anArray) {
  return anArray.reduce((num1, num2) => num1 * num2, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(aNum) {
  let total = 1;
	while(aNum > 0){
    total *= aNum;
    aNum--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
