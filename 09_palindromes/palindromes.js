const palindromes = function (aString) {
    aString = aString.toLowerCase();
    let strArray = [];

    //Create array with only letters from string
    //No punctuation or spaces
    for(let i = 0; i < aString.length; i++){
        let currentChar = aString[i];
        if(currentChar.toUpperCase() != currentChar.toLowerCase()){
            strArray.push(currentChar);
        }
    }
    
    //Check if string is a palindrome
    let end = strArray.length - 1;
    for(let start = 0; start <= end; start++){
        if(strArray[start] !== strArray[end]){
            return false;
        }
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
