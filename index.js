let selectedColors = ['blue', 'red'];
selectedColors[4] = 5;
console.log(selectedColors);
console.log(selectedColors[3]);
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Max', 'Sychenko');
greet('Kate', 'Sychenko');

function square(number) {
    return number * number;
}

console.log(square(4));