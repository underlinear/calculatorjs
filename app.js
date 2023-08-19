//basic operators
const display = document.querySelector('[type="text"]');
let previousValue;
let operationType = {
    currentOperator: '',
    recentlyUpdated: false,
}

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
    if( b === 0)
    {
        doSomethingCool();
    }
    return a / b;
}

function operate() {
    console.log("Hi!");
}

function updateOperator(event) {
    operationType.currentOperator = event.target.textContent;
    operationType.recentlyUpdated = true;
    
}

function displayInput (event) {
    if(operationType.recentlyUpdated)
    {
        previousValue = display.value;
        display.value = '';
        operationType.recentlyUpdated = false;
    }
    const pressedButton = event.target;
    display.value += pressedButton.textContent;
}

const numberButtons = Array.from(document.querySelectorAll('[data-button-type="number"]'));

numberButtons.forEach((button)=>button.addEventListener('click',(e)=>displayInput(e)));

const operateButtons = Array.from(document.querySelectorAll('[data-button-type="operate"]'));

operateButtons.forEach((button)=>button.addEventListener('click',(e)=>updateOperator(e)));

