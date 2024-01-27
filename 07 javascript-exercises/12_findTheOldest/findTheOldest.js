const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

