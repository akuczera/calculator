let screenText = document.querySelector('div.display');
let currentVal = '';
let storedVal = 0;
let displayVal = '';
let ops = '';
let result;

//NUMBERS: Listens for number to be clicked
document.querySelectorAll('button.num').forEach(button => button.addEventListener('click', () => display(button.textContent)));

 function display(digit) {
  if(ops === '=') {
    storedVal = 0;
  }

//Creates string of "digits" if currentVal isn't blank.  
  if(digit === '0' && ops === '/') {
    screenText.textContent = "Nice try...";
    storedVal = NaN;
 } else if(digit === '0' && currentVal === ''){
 } else {
    currentVal = currentVal + digit;
    screenText.textContent = currentVal;
  }
  console.log("Clicked number:");
  console.log("currentVal =" + currentVal);
  console.log("Ops =" + ops);
  console.log("storedVal =" + storedVal);
}

//OPERATORS: Listens for operator to be clicked and stores first value
document.querySelectorAll('button.ops').forEach(button => button.addEventListener('click', () => storeOps(button.textContent)));

 function storeOps(type) {
 if(storedVal === 0 && currentVal > 0){
    storedVal = parseFloat(currentVal);
    currentVal = '';
  }

  if(ops != ''){
    operator();
    ops = type;
  } else {
  screenText.textContent = type;
  ops = type;
  }
  console.log("Clicked operator");
  console.log("currentVal =" + currentVal);
  console.log("Ops =" + ops);
  console.log("storedVal =" + storedVal);
 }

//EQUALS: Listens for equals to be clicked and stores second value, runs operation, displays result
document.querySelector('button.equal').addEventListener('click', equals);

function equals() {
  if(currentVal > 0 && ops !== '') {
    operator();
    ops = '=';
  }
  console.log("Clicked equals:");
  console.log("currentVal =" + currentVal);
  console.log("Ops =" + ops);
  console.log("storedVal =" + storedVal);
}

//CLEAR: Listens for clear button to reset values.
document.querySelector('button.clear').addEventListener('click', clear);

function clear() {
currentVal = '';
storedVal = 0;
ops = '';
screenText.textContent = '0';
  console.log("Cleared");
  console.log("currentVal =" + currentVal);
  console.log("Ops =" + ops);
  console.log("storedVal =" + storedVal);
}

//BASIC Functions
function add(a, b) {
  storedVal = parseFloat((a + b).toFixed(8));
}

function subtract(a ,b) {
  storedVal = parseFloat((a - b).toFixed(8));
}

function multiply(a, b) {
  storedVal = parseFloat((a * b).toFixed(8));
}

function divide(a, b) {
  storedVal = parseFloat((a / b).toFixed(8));
}

//OPERATOR Function
function operator() {
  if(ops === '+') {
    result = add(storedVal, parseFloat(currentVal));
  } else if(ops === '-') {
    result = subtract(storedVal, parseFloat(currentVal));
  } else if(ops === 'x') {
    result = multiply(storedVal, parseFloat(currentVal));
  } else if(ops === '/') {
    result = divide(storedVal, parseFloat(currentVal));
  }
  screenText.textContent = storedVal;
  currentVal = '';
  console.log("Ran operation");
  console.log("currentVal =" + currentVal);
  console.log("Ops =" + ops);
  console.log("storedVal =" + storedVal);
}

//NEXT STEPS
//Add a way to make a number negative.
//Disable the decimal button so that once it's clicked it cannot be used until the "next function"
//Make the calculator pretty.
//Add keyboard support?