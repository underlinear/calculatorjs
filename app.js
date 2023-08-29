// for output display
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
        //if user attemps to divide by 0
        const entirePage = document.querySelector('*');
        entirePage.style.filter='none';
        return 'Light Mode';
    }
    return a / b;
}

function operate(a,b) {
    //direct user to the selected operator function
    display.value =
        operationType.currentOperator === '+'? add(a,b):
        operationType.currentOperator === '-'? subtract(a,b):
        operationType.currentOperator === '/'? divide(a,b):
        multiply(a,b);
}

function updateOperator(event) {
    const pressedOperatorButton = event.target.textContent;
    operationType.recentlyUpdated = true;
    //get rid of easter egg output
    if(display.value==='Light Mode')
    {
        display.value='0';
    }
    if(pressedOperatorButton==='='&&operationType.currentOperator!=='=')
    {
        latestValue = +display.value;
        operate(previousValue,latestValue);
    }
    else if(pressedOperatorButton!=='='&&operationType.currentOperator!=='=')
    {
        latestValue = +display.value;
        previousValue = operate(previousValue,latestValue);
    }
    operationType.currentOperator = pressedOperatorButton;
}

function displayInput (event) {
    const pressedButton = event.target;
    //if an operator has been recently used, the next click of number would simply erase the current output
    if(operationType.recentlyUpdated)
    {
        previousValue = +display.value;
        display.value = '0';
        operationType.recentlyUpdated = false;
    }
    //to replace the temporary zeroes
    if(display.value == '0' ||
       display.value.substring(display.value.length-2) == '.0')
    {
        display.value=display.value.substring(0,display.value.length-1);
    }
    if(pressedButton.textContent == ".")
    {
        display.value += ".0";
    }
    else{
    display.value += pressedButton.textContent;
    }
}

function clearRecentEntry () {
    //remove last char of string
    display.value = display.value.substring(0,display.value.length-1);
    if(display.value == '')
    {
        display.value = "0";
    }
}

function clearAll () {
    display.value = '0';
}

function invert () {
    if(sign) {
        sign = '';
        display.value = display.value.substring(1);
    }
    else {sign = '-';}
    display.value = sign + display.value;
}

function toggleOnOff () {
    const calculatorWindow = document.querySelector('main');
    setTimeout(function(){
        calculatorWindow.style.display='none';
    },2000);
    
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

const toggleOnOffButton = document.querySelector('[data-button-type="on/off"]');
toggleOnOffButton.addEventListener('click',()=>toggleOnOff());
