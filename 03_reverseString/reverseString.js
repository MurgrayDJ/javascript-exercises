const reverseString = function(aString) {
    let reversedString = '';
    let stringLength = aString.length;

    for(let i = aString.length-1; i >= 0; i--){
        reversedString = reversedString + aString[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
