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
            add(a, b);
        case '-':
            subtract(a, b);
        case '*':
            multiply(a, b);
        case '/':
            divide(a, b);
    }
}

function addUserInput(str) {
    switch (str) {
        case '1':
            addDisplay(1);
            break;
        case '2':
            addDisplay(2);
            break;
        case '3':
            addDisplay(3);
            break;
        case '4':
            addDisplay(4);
            break;
        case '5':
            addDisplay(5);
            break;
        case '6':
            addDisplay(6);
            break;
        case '7':
            addDisplay(7);
            break;
        case '8':
            addDisplay(8);
            break;
        case '9':
            addDisplay(9);
            break;
    }
}

function addDisplay(str) {
    calcDisplay += str;
    displayDiv.textContent = calcDisplay;
}

let calcDisplay = "";
const btns = document.querySelectorAll('button');
const displayDiv = document.querySelector('.display')
btns.forEach(
    btn => btn.addEventListener(
        'click', btn => addUserInput(btn.target.getAttribute('data-btn'))
        )
)