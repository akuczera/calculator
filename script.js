let screenText = document.querySelector('div.display');
console.log(screenText.textContent);

let currentVal;
let num1;
let num2;
let ops;

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
}

//Listens for equals to be clicked and stores second value, runs operation, displays result
let equal = document.querySelector('button.equal')
equal.addEventListener('click', calculate);

 function calculate() {
  num2 = currentVal;
  operator(ops, num1, num2);
}

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
    let add = add(num1, num2);
    screenText.textContent = add;
  } else if(symbol === '-') {
    let sub = subtract(num1, num2);
    screenText.textContent = sub;
  } else if(symbol === '*') {
    let mult = multiply(num1, num2);
    screenText.textContent = mult;
  } else if(symbol === '/') {
    let div = divide(num1, num2);
    screenText.textContent = div;
  }
}