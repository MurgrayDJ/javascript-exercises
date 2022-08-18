const removeFromArray = function(theArray, ...argsToDelete) {

    for(let i = 0; i < argsToDelete.length; i++){
        for(let j = 0; j < theArray.length; j++){
            if(theArray[j] === argsToDelete[i]){
                theArray.splice(j, 1);
            }
        }
    }

    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
