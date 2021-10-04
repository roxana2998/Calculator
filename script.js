const addButton = document.querySelector(".btn-add");
const subtractButton = document.querySelector(".btn-subtract");
const multiplyButton = document.querySelector(".btn-multiply");
const divideButton = document.querySelector(".btn-divide");
const squaredButton = document.querySelector(".btn-squared");
const equalButton = document.querySelector(".btn-equal");
const inputButtons = document.querySelectorAll(".number-btn");
const displayNumber = document.querySelector(".screen");
const clearButton = document.querySelector(".btn-clear");
const deleteButton = document.querySelector(".btn-delete");

let validOperation = false;
let currentResult = 0;
let number1 = null;
let number2 = null;
let lastOperator = "";
let newNumber;

inputButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (validOperation === false) {
      if (displayNumber.textContent.length < 10) { 
        displayNumber.textContent += button.textContent;
      } else {
        return;
      }
    } else {
      displayNumber.textContent = "";
      displayNumber.textContent += button.textContent;
    }
    validOperation = false;
  });
});

function clearDisplay() {
  displayNumber.textContent = "";
  number1 = null;
  number2 = null;
  currentResult = 0;
  lastOperator = "";
  validOperation = false;
}

function deleteDigit() {
  let enteredNumber = displayNumber.textContent.slice(0, -1);
  displayNumber.textContent = enteredNumber;
}

function showResult(operation) {
  validOperation = true;

  if (number2 === null) {
    currentResult = number1;
  } else {
    if (operation === "+") {
      currentResult = number1 + number2;
    } else if (operation === "-") {
      currentResult = number1 - number2;
    } else if (operation === "*") {
      currentResult = number1 * number2;
    } else if (operation === "/") {
      currentResult = number1 / number2;
    }
  }

  if (operation === "**2") {
    currentResult = number1 ** 2;
  }

  displayNumber.textContent = currentResult;
  number1 = currentResult;
}

function add() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.textContent);
  } else {
    number2 = Number(displayNumber.textContent);
  }
  showResult(lastOperator);
  lastOperator = "+";
}

function subtract() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.textContent);
  } else {
    number2 = Number(displayNumber.textContent);
  }
  showResult(lastOperator);
  lastOperator = "-";
}

function multiply() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.textContent);
  } else {
    number2 = Number(displayNumber.textContent);
  }
  showResult(lastOperator);
  lastOperator = "*";
}

function divide() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.textContent);
  } else {
    number2 = Number(displayNumber.textContent);
  }
  showResult(lastOperator);
  lastOperator = "/";
}

function squared() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.textContent);
  } else {
    number2 = Number(displayNumber.textContent);
  }
  showResult(lastOperator);
  showResult("**2");
  lastOperator = "";
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
squaredButton.addEventListener("click", squared);
clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteDigit);
equalButton.addEventListener("click", function () {
  number2 = Number(displayNumber.textContent);
  showResult(lastOperator);
  lastOperator = "";
});
