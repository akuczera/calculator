// 1.0 Your calculator should contain functions for all of the basic math operators
//add, subtract, multiply, divide.

function add(a, b) {
  const sum = a + b;
  console.log(sum);
}

function subtract(a ,b) {
  const difference = a - b;
  console.log(difference);
}

function multiply(a, b) {
  const product = a * b;
  console.log(product);
}

function divide(a, b) {
  const quotient = a / b;
  console.log(quotient);
}

add(1 , 20);
subtract(10, 5);
multiply(2, 4);
divide(6, 3);

//2.0 Create a new function 'operate' that takes
//an operator and 2 numbers and then calls on of the
//above functions