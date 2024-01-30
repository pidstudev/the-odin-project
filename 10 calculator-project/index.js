let firstNumber = '';
let operator = '';
let secondNumber = '';
const displayElement = document.getElementById('display');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    displayError("Error: Cannot divide by zero!");
    return 'Error';
  }
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error';
  }
}

function updateDisplay() {
  displayElement.textContent = firstNumber + "" + operator + "" +secondNumber;
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay();
}

function appendNumber(digit) {
  if (operator === '') {
    firstNumber += digit;
  } else {
    secondNumber += digit;
  }
  updateDisplay();
}

function appendDecimal() {
  if (operator === '') {
    if (!firstNumber.includes('.')) {
      firstNumber += '.';
    }
  } else {
    if (!secondNumber.includes('.')) {
      secondNumber += '.';
    }
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator === '' || secondNumber === '') {
    operator = op;
    updateDisplay();
  } else {
    calculate();
    operator = op;
    updateDisplay();
  }
}

function calculate() {
  if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
    let result = operate(operator, firstNumber, secondNumber);
    result = Math.round(result * 100) / 100;
    displayElement.textContent = result;
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
  }
}

function handleOperatorClick(op) {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    calculate();
  }

  if (firstNumber !== '' && operator === '' && secondNumber === '') {
    operator = op;
    updateDisplay();
  }
}

function handleEqualsClick() {
  calculate();
}

function displayError(message) {
  displayElement.textContent = message;
  setTimeout(clearDisplay, 2000);
}
