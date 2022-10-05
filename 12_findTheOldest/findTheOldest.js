const findTheOldest = function(people) {
    const oldest = people.reduce((prevPerson, curPerson) => {
        let prevAge, curAge;
        let currentYear = new Date().getFullYear();

        if('yearOfDeath' in prevPerson){
            prevAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
        }
        else{
            prevAge = currentYear - prevPerson.yearOfBirth;
        }

        if('yearOfDeath' in curPerson){
            curAge = curPerson.yearOfDeath - curPerson.yearOfBirth;
        }
        else{
            curAge = currentYear - curPerson.yearOfBirth;
        }

        return (prevAge > curAge) ? prevPerson : curPerson;
    }, {})

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
