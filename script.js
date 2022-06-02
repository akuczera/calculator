let screenText = document.querySelector('div.display');
console.log(screenText.textContent);

let currentVal;
let num1;
let num2;
let ops;
let result;

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
  ops = type;
  console.log(ops);
  console.log(typeof(ops));
}

//Listens for equals to be clicked and stores second value, runs operation, displays result
let equal = document.querySelector('button.equal');
equal.addEventListener('click', calculate);

 function calculate() {
  num2 = currentVal;
  console.log(num2);
  operator(ops, num1, num2);
}

//BASIC Functions
function add(a, b) {
  const sum = a + b;
  screenText.textContent = sum;
}

function subtract(a ,b) {
  const difference = a - b;
  screenText.textContent = difference;
}

function multiply(a, b) {
  const product = a * b;
  screenText.textContent = product;
}

function divide(a, b) {
  const quotient = a / b;
  screenText.textContent = quotient;
}

//OPERATOR Function
function operator(symbol, num1, num2) {
  if(symbol === '+') {
    result = add(num1, num2);
  } else if(symbol === '-') {
    result = subtract(num1, num2);
  } else if(symbol === 'x') {
    result = multiply(num1, num2);
  } else if(symbol === '/') {
    result = divide(num1, num2);
  }
}