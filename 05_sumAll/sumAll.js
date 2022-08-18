const sumAll = function(intA, intB) {
    if(typeof intA != 'number' || 
        typeof intB != 'number' ||
        intA < 0 || intB < 0){
        return 'ERROR';
    }
    
    let startInt = 0;
    let endInt = 0;
    
    if(intA <= intB){
        startInt = intA;
        endInt = intB;
    }
    else{
        startInt = intB;
        endInt = intA;
    }
    
    let finalSum = 0;
    
    for(let i = startInt; i <= endInt; i++){
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
