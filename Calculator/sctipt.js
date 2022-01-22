"use strict";

// Theamas changer
var themeToggleFirst = document.querySelector("#first_toggle");
var themeToggleSecond = document.querySelector("#second_toggle");
var themeToggleThird = document.querySelector("#third_toggle");

function changeTheme(themeName) {
  document.getElementById("theme-css").href = `css/${themeName}`;
}

themeToggleFirst.addEventListener("click", () => {
  changeTheme("theme1.css");
});

themeToggleSecond.addEventListener("click", () => {
  changeTheme("theme2.css");
});

themeToggleThird.addEventListener("click", () => {
  changeTheme("theme3.css");
});


// Toggle switcher
$(".toggle_radio .toggle_option").change(function(){ 
  if( $(this).is(":checked") ){ 
    var val = $(this).val();
    console.log(val + " clicked");
        if(val == 1){
          $('.toggle_radio').addClass('theme1');
          $('.toggle_radio').removeClass('theme2');
          $('.toggle_radio').removeClass('theme3');
            }
          else if (val == 2){
              $('.toggle_radio').addClass('theme2');
              $('.toggle_radio').removeClass('theme1');
              $('.toggle_radio').removeClass('theme3');
               } 
              else if (val == 3){
                 $('.toggle_radio').addClass('theme3');
                 $('.toggle_radio').removeClass('theme1');
                 $('.toggle_radio').removeClass('theme2'); }
        }
});

//calculator

class Calculator { //create a new class 
  constructor(previousOperandTextElemenet, currentOperandTextElemenet) {
    this.previousOperandTextElemenet = previousOperandTextElemenet;
    this.currentOperandTextElemenet = currentOperandTextElemenet;
    this.reset();
  }

  reset() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    operationDisplay.innerText = "";
  }

  delete() {
    if (this.currentOperandTextElemenet.innerText === "Infinity") { 
      calculator.reset();
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return; //if the input already include a dot and the new var is dos so return
    this.currentOperand = this.currentOperand.toString() + number.toString(); //append
  }

  chooseOperation() {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operationDisplay.innerText) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
    this.buttonDisplay = "";
  }

  updateDisplay() {
    this.currentOperandTextElemenet.innerText = this.currentOperand;
    this.previousOperandTextElemenet.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const resetButton = document.querySelector("[data-reset]");
const deleteButton = document.querySelector("[data-delete]");
const operationDisplay = document.getElementById("operation");
const previousOperandTextElemenet = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElemenet = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElemenet,
  currentOperandTextElemenet
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation();
    operationDisplay.innerText = button.innerText;
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  operationDisplay.innerText = "";
  calculator.updateDisplay();
});

resetButton.addEventListener("click", (button) => {
  calculator.reset();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});


