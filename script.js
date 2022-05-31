
//BASIC Functions
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


//2.0 Create a new function 'operate' that take an operator and 2 numbers and then calls on of the
//above functions

//OPERATOR Function
function operator(symbol, num1, num2) {
  if(symbol === '+') {
    add(num1, num2);
  } else if(symbol === '-') {
    subtract(num1, num2);
  }else if(symbol === '*') {
    multiply(num1, num2);
  }else if(symbol === '/'){
    divide(num1, num2);
  }
}

operator('+', 1 , 20);
operator('-', 10, 5);
operator('*', 2, 4);
operator('/', 6, 3);