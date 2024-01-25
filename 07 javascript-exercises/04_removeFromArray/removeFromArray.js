const removeFromArray = function(array, ...value) {
    return array.filter( item => !value.includes(item) )
};

// Do not edit below this line
module.exports = removeFromArray;

