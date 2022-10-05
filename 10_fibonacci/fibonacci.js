const fibonacci = function(aNum) {
    let theNum = parseInt(aNum);
    if(theNum < 0 || isNaN(theNum)){
        return "OOPS";
    }

    let num1 = 1;
    let num2 = 0;
    let currentSum = 1;
    for(let i = 1; i < theNum; i++){
        currentSum = num1 + num2;
        num2 = num1;
        num1 = currentSum;
    }
    return currentSum;
};

// Do not edit below this line
module.exports = fibonacci;
