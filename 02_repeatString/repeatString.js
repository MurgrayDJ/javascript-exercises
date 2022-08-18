const repeatString = function(theString, aNum) {
    let finalString = "";
    
    if(aNum < 0){
        finalString = 'ERROR';
    }

    for(let i = 0; i < aNum; i++){
        finalString = finalString + theString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
