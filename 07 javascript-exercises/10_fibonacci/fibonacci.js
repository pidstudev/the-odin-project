const fibonacci = function(input) {
    let num = Number(input);
    
    if (num === 0) {
        return 0;
    } else if (num === 1 || num === 2) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    } else {
        let a = 1;
        let b = 1;
        let result = 0;

        for (let i = 3; i <= num; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;

