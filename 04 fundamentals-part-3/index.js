function add7 (num1){
    return num1 + 7;
}

console.log(add7(3));


function multiply (num1, num2){
    return num1 * num2;
}

console.log(multiply(2,3));


function capitalize (string){
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("HELLO"));


function lastLetter (string){
    return string.charAt(string.length - 1);
}

console.log(lastLetter("Hello"))

