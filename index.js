// Example of array
let selectedColors = ['blue', 'red'];
selectedColors[4] = 5;
console.log(selectedColors);

//Example of calling unspecified value
console.log(selectedColors[3]);

// Example of funtion
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//Example of function's call
greet('Max', 'Sychenko');
greet('Kate', 'Sychenko');

// Example of function with parameters
function square(number) {
    return number * number;
}

//Example of function's call with arguments
console.log(square(4));