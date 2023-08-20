//basic operators
const display = document.querySelector('[type="text"]');

let previousValue, latestValue;
let operationType = {
    currentOperator: '=',
    recentlyUpdated: false,
}
let sign = '';

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
    display.value =
        operationType.currentOperator === '+'? add(previousValue, latestValue):
        operationType.currentOperator === '-'? subtract(previousValue, latestValue):
        operationType.currentOperator === '/'? divide(previousValue, latestValue):
        multiply(previousValue, latestValue);
}

function updateOperator(event) {
    const pressedOperatorButton = event.target.textContent;
    operationType.recentlyUpdated = true;
    
    if(pressedOperatorButton==='='&&operationType.currentOperator!=='=')
    {
        operate();
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

function clearRecentEntry () {
    display.value = display.value.substring(0,display.value.length-1);
}

function clearAll () {
    display.value = '';
}

function invert () {
    if(sign) {
        sign = '';
        display.value = display.value.substring(1);
    }
    else {sign = '-';}
    display.value = sign + display.value;
}

const numberButtons = Array.from(document.querySelectorAll('[data-button-type="number"]'));

numberButtons.forEach((button)=>button.addEventListener('click',(e)=>displayInput(e)));

const operateButtons = Array.from(document.querySelectorAll('[data-button-type="operate"]'));

operateButtons.forEach((button)=>button.addEventListener('click',(e)=>updateOperator(e)));

const clearRecentButton = document.querySelector('[data-button-type="clearrecent"]');

clearRecentButton.addEventListener('click',()=>clearRecentEntry());

const clearAllButton = document.querySelector('[data-button-type="clearall"]');

clearAllButton.addEventListener('click',()=>clearAll());

const invertButton = document.querySelector('[data-button-type="invertnumber"]');

invertButton.addEventListener('click',()=>invert());

