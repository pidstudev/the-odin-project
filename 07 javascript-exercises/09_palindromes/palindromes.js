const palindromes = function (string) {
    let newString = string.replace(/ |,|\.|!|/g, "").toLowerCase();
    let result = "";
    for (let i = newString.length - 1; i >= 0; i--) {
        result += newString[i];
    }
    if (result === newString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

