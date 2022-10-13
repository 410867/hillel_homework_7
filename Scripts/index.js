let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let time = 0;

while (true) {
    if(time === 4) {
        break;
    }
    time++;
    operation = prompt('Введіть операцію, яку ви хочите зробити(add, sub, mult, div): ');
    firstNumber = Number(prompt('Введіть перше число: '));
    secondNumber = Number(prompt('Введіть друге число: '));
    if((!isNaN(firstNumber)) && (!isNaN(secondNumber)) &&
        (operation === 'add' || operation === 'sub' || operation === 'mult' || operation === 'div')) {
        break;
    }
}

if (!isNaN(firstNumber) && !isNaN(secondNumber) && time < 5 && time !== 0) {
    switch (operation) {
        case "add":
            alert(`Користувач ввів додавання: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case "sub":
            alert(`Користувач ввів віднімання: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case "mult":
            alert(`Користувач ввів множення: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case "div":
            alert(`Користувач ввів ділення: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        default:
            alert('Введені некоректні данні.');
            break;
    }
} else {
    alert('Введені некоректні данні.');
}
