const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else if (num1 === num2) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

