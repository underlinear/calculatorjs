//basic operators
function add (a, b) {
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

function operate(a, b) {
    console.log("Hi!");
}

function doSomethingCool() {
    console.log("This function is temporarily out of order");
}

function displayInput (event) {
    const display = document.querySelector('[type="text"]');
    const pressedButton = event.target;
    display.value += pressedButton.textContent;
}

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button)=>button.addEventListener('click',(e)=>displayInput(e)));
