function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').innerText = 'Result: ';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculate(operation) {
    const display = document.getElementById('display');
    const number = parseFloat(display.value);
    let result;

    switch (operation) {
        case 'exponentiation':
            const exponent = parseFloat(prompt('Enter exponent:'));
            result = Math.pow(number, exponent);
            break;
        case 'logarithm':
            result = Math.log10(number);
            break;
        case 'sine':
            result = Math.sin(number);
            break;
        case 'cosine':
            result = Math.cos(number);
            break;
        case 'tangent':
            result = Math.tan(number);
            break;
        default:
            result = 'Error';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}