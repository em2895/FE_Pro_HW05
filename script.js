let action = (prompt('Оберіть дію (add, sub, mult, div)'));

let a = Number(prompt('Введіть перше число:'));
let b = Number(prompt('Введіть друге число:'));

switch (action) {
    case 'add':
        alert(a + " + " + b + ' = ' + [a + b]);
        break;
    case 'sub':
        alert(a + " - " + b + ' = ' + [a - b]);
        break;
    case 'mult':
        alert(a + " * " + b + ' = ' + [a * b]);
        break;
    case 'div':
        alert(a + " / " + b + ' = ' + [a / b]);
        break;
    default:
        alert("Вибачте, ви ввели неправильне значення!");
  }