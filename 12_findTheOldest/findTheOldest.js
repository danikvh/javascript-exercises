const findTheOldest = function(people) {
    return people.reduce(function(personA, personB) {
        const ageA = getAge(personA.yearOfBirth, personA.yearOfDeath);
        const ageB = getAge(personB.yearOfBirth, personB.yearOfDeath);
        return (ageA > ageB) ? personA : personB;
    });
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
