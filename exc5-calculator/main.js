
const screenNumber = document.querySelector('#numScreen');
const cButton = document.querySelector('#clearButton');
let num1 = 0;
let num2 = 0;
let lastCalc = 0;
let operator = '';
function clearNumbers() {
    screenNumber.innerHTML = '0';
    cButton.textContent = 'CE';
}
function addNumberToCalculator(num) {
    if (operator === '') {
        if (screenNumber.innerHTML === '0') {
            screenNumber.innerHTML = num;
        } else if (screenNumber.innerHTML.length < 9) {
            screenNumber.innerHTML += num;
        }
        num1 = parseFloat(screenNumber.innerHTML);
        cButton.textContent = 'C';
    } else {
        if (num2 === 0) {
            screenNumber.innerHTML = num;
            num2 = parseFloat(screenNumber.innerHTML);
        } else if (screenNumber.innerHTML.length < 9) {
            screenNumber.innerHTML += num;
            num2 = parseFloat(screenNumber.innerHTML);
        }
    }
}
function addDotToCalculator() {
    countDot = 0;
    for (i = 0; i < screenNumber.innerHTML.length; i++) {
        if (screenNumber.innerHTML[i] == '.') {
            countDot++;
        }
    }
    if (countDot == 0) {
        screenNumber.innerHTML += '.';
    }
}
function setOperator(op) {
    operator = op;
}
function calculate() {
    if (operator == '+') {
        screenNumber.innerHTML = num1 + num2;
    }
    else if (operator == '-') {
        screenNumber.innerHTML = num1 - num2;
    }
    else if (operator == 'x') {
        screenNumber.innerHTML = num1 * num2;
    }
    else if (operator == '÷') {
        screenNumber.innerHTML = num1 / num2;
    }
    operator = '';
    num1 = 0;
    num2 = 0;
}