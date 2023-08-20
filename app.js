//basic operators
const display = document.querySelector('[type="text"]');
let previousValue, latestValue;
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
    latestValue = +display.value;
    console.log(operationType);
    display.value =
        operationType.currentOperator === '+'? add(previousValue, latestValue):
        operationType.currentOperator === '-'? subtract(previousValue, latestValue):
        operationType.currentOperator === '/'? divide(previousValue, latestValue):
        multiply(previousValue, latestValue);
}

function updateOperator(event) {
    const pressedOperatorButton = event.target.textContent;
    operationType.recentlyUpdated = true;
    if(pressedOperatorButton==='=')
    {
        operate();
        return;
    }
    operationType.currentOperator = pressedOperatorButton;
}

function displayInput (event) {
    if(operationType.recentlyUpdated)
    {
        previousValue = +display.value;
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

