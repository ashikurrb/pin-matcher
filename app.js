function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = "";
        }
    } else {
        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const succesMessage = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-failed');
    if (pin == typedNumbers) {
        succesMessage.style.display = 'block';
        failedError.style.display = 'none';

    } else {
        failedError.style.display = 'block';
        succesMessage.style.display = 'none';

    }
}