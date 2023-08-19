//basic operators
const display = document.querySelector('[type="text"]');

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

function parseOperationType(event) {
    const operationType = event.target.textContent;
    if (operationType==="+") {alert(add(1,2));}
    else if (operationType==="-") {alert(subtract(1,2));}
    else if (operationType==="X") {alert(multiply(1,2));}
    else if (operationType==="/") {alert(divide(1,2));}
}

function displayInput (event) {
    const pressedButton = event.target;
    display.value += pressedButton.textContent;
}

const numberButtons = Array.from(document.querySelectorAll('[data-button-type="number"]'));

numberButtons.forEach((button)=>button.addEventListener('click',(e)=>displayInput(e)));

const operateButtons = Array.from(document.querySelectorAll('[data-button-type="operate"]'));

operateButtons.forEach((button)=>button.addEventListener('click',(e)=>parseOperationType(e)));