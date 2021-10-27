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
      if (displayNumber.value.length < 10) {
        displayNumber.value += button.textContent;
      } else {
        return;
      }
    } else {
      displayNumber.value = "";
      displayNumber.value += button.textContent;
    }
    validOperation = false;
  });
});

function clearDisplay() {
  displayNumber.value = "";
  number1 = null;
  number2 = null;
  currentResult = 0;
  lastOperator = "";
  validOperation = false;
}

function deleteDigit() {
  let enteredNumber = displayNumber.value.slice(0, -1);
  displayNumber.value = enteredNumber;
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

  if (currentResult.toString().length > 12) {
    displayNumber.style.height = "14vh";
  } else {
    displayNumber.style.height = "7vh";
  }

  displayNumber.value = currentResult;
  number1 = currentResult;
}

function add() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.value);
  } else {
    number2 = Number(displayNumber.value);
  }
  showResult(lastOperator);
  lastOperator = "+";
}

function subtract() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.value);
  } else {
    number2 = Number(displayNumber.value);
  }
  showResult(lastOperator);
  lastOperator = "-";
}

function multiply() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.value);
  } else {
    number2 = Number(displayNumber.value);
  }
  showResult(lastOperator);
  lastOperator = "*";
}

function divide() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.value);
  } else {
    number2 = Number(displayNumber.value);
  }
  showResult(lastOperator);
  lastOperator = "/";
}

function squared() {
  if (lastOperator === "") {
    number1 = Number(displayNumber.value);
  } else {
    number2 = Number(displayNumber.value);
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
clearButton.addEventListener("click", function () {
  clearDisplay();
  displayNumber.style.height = "7vh";
});
deleteButton.addEventListener("click", deleteDigit);
equalButton.addEventListener("click", function () {
  number2 = Number(displayNumber.value);
  showResult(lastOperator);
  lastOperator = "";
});
