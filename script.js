let screenText = document.querySelector('div.display');
console.log(screenText.textContent);

let currentVal;
let storedVal;
let ops;
let result;

//Listens for number to be clicked
 document.querySelectorAll('button.num').forEach(button => button.addEventListener('click', () => display(button.textContent)));

 function display(digit) {
  screenText.textContent = digit; 
  currentVal = parseInt(digit);
  console.log("current value=" + currentVal);
}

//Listens for operator to be clicked and stores first value
document.querySelectorAll('button.ops').forEach(button => button.addEventListener('click', () => storeOps(button.textContent)));

 function storeOps(type) {
  if(!storedVal){
   storedVal = currentVal;
  }
  console.log("storedVal=" + storedVal);
  screenText.textContent = type;
  ops = type;
}

//Listens for equals to be clicked and stores second value, runs operation, displays result
document.querySelector('button.equal').addEventListener('click', operator);

//Listens for clear button to reset values.
document.querySelector('button.clear').addEventListener('click', clear);

function clear() {
currentVal = 0;
storedVal = 0;
screenText.textContent = '';
}

//BASIC Functions
function add(a, b) {
  storedVal = a + b;
  screenText.textContent = storedVal;
  console.log("storedVal=" + storedVal);
}

function subtract(a ,b) {
  storedVal = a - b;
  screenText.textContent = storedVal;
  console.log("storedVal=" + storedVal);
}

function multiply(a, b) {
  storedVal = a * b;
  screenText.textContent = storedVal;
  console.log("storedVal=" + storedVal);
}

function divide(a, b) {
  storedVal = a / b;
  screenText.textContent = storedVal;
  console.log("storedVal=" + storedVal);
}

//OPERATOR Function
function operator() {
  if(ops === '+') {
    result = add(storedVal, currentVal);
  } else if(ops === '-') {
    result = subtract(storedVal, currentVal);
  } else if(ops === 'x') {
    result = multiply(storedVal, currentVal);
  } else if(ops === '/') {
    result = divide(storedVal, currentVal);
  }
}