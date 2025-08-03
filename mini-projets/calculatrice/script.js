let result = document.getElementById('result');

function display(val) {
    result.value += val;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        alert('Invalide');
    }
}

function clearScreen() {
    result.value = '';
}

function del() {
    result.value = result.value.slice(0, -1);
}