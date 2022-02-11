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
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return b;
    }
}

function addUserInput(str) {
    switch (str) {
        case '1':
            addDisplay('1');
            break;
        case '2':
            addDisplay('2');
            break;
        case '3':
            addDisplay('3');
            break;
        case '4':
            addDisplay('4');
            break;
        case '5':
            addDisplay('5');
            break;
        case '6':
            addDisplay('6');
            break;
        case '7':
            addDisplay('7');
            break;
        case '8':
            addDisplay('8');
            break;
        case '9':
            addDisplay('9');
            break;
        case '0':
            addDisplay('0');
            break;
        case '+':
            doOperation('+');
            break;
        case '-':
            doOperation('-');
            break;
        case '*':
            doOperation('*');
            break;
        case '/':
            doOperation('/');
            break;
        case '=':
            doOperation('=');
            break;
        case 'AC':
            clearAll();
            break;
    }
}

function addDisplay(str) {
    if (isOpResult == false){
        displayDiv.textContent += str;
    }
    else {
        displayDiv.textContent = str;
        isOpResult = false;
    }
}

function doOperation(str) {
    let tmp = parseFloat(displayDiv.textContent);
    if (isNaN(tmp) == true) {
        isOpResult = true;
        prevOp = '=';
        return;
    }
    displayDiv.textContent = '';
    if (tmp == 0 && prevOp == '/') {
        displayDiv.textContent = "Go Fuck Yourself";
        isOpResult = true;
        prevOp = '=';
        return;
    }
    mem = operate(prevOp, mem, tmp);
    if (str == '=') {
        displayDiv.textContent = Math.round(mem * 1000)/1000;
        isOpResult = true;
    } else {isOpResult = false}
    prevOp = str;
}

function clearAll() {
    isOpResult = false;
    mem = 0;
    prevOp = "=";
    displayDiv.textContent = '';
}

let isOpResult = false;
let mem = 0;
let prevOp = "=";
const btns = document.querySelectorAll('button');
const displayDiv = document.querySelector('.display')
btns.forEach(
    btn => btn.addEventListener(
        'click', btn => addUserInput(btn.target.getAttribute('data-btn'))
        )
)