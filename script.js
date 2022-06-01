let screenText = document.querySelector('div.display');
console.log(screenText.textContent);

let currentVal;
let num1;
let num2;

//Listens for number to be clicked
 document.querySelectorAll('button.num').forEach(button => button.addEventListener('click', () => display(button.textContent)));

 function display(digit) {
  screenText.textContent = digit; 
  currentVal = parseInt(digit);
}

//Listens for operator to be clicked and stores first value
 document.querySelectorAll('button.ops').forEach(button => button.addEventListener('click', () => storeOps(button.textContent)));

 function storeOps(type) {
  num1 = currentVal;
  screenText.textContent = type;
}

//Listens for equals to be clicked and stores second value, runs operation, displays result

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

//OPERATOR Function
function operator(symbol, num1, num2) {
  if(symbol === '+') {
    add(num1, num2);
  } else if(symbol === '-') {
    subtract(num1, num2);
  } else if(symbol === '*') {
    multiply(num1, num2);
  } else if(symbol === '/') {
    divide(num1, num2);
  }
}