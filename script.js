let screenText = document.querySelector('div.display');
let currentVal;
let storedVal;
let ops;
let flag = false;
let result;

//Listens for number to be clicked
 document.querySelectorAll('button.num').forEach(button => button.addEventListener('click', () => display(button.textContent)));

 function display(digit) {
  if(ops === '=') {
    storedVal = 0;
  }

   //Below does not really work, because making op = '' doesn't work when I then click + and another number. The + does not get stored. Need different flag.
  if(!flag){
  currentVal = digit;
  screenText.textContent = currentVal;
  flag = !flag;
    console.log(flag);
  } else if(flag) {
    currentVal = currentVal + digit;
    console.log(flag);
    screenText.textContent = currentVal;
  }
  // screenText.textContent = digit; 
  // currentVal = parseInt(digit);
  // console.log("current value=" + currentVal);
}

//Listens for operator to be clicked and stores first value
document.querySelectorAll('button.ops').forEach(button => button.addEventListener('click', () => storeOps(button.textContent)));

 function storeOps(type) {
  if(!storedVal){
   storedVal = parseInt(currentVal);
  }
  screenText.textContent = type;
  ops = type;
  flag = !flag;
}

//Listens for equals to be clicked and stores second value, runs operation, displays result
document.querySelector('button.equal').addEventListener('click', operator);

//Listens for clear button to reset values.
document.querySelector('button.clear').addEventListener('click', clear);

function clear() {
currentVal = 0;
storedVal = 0;
ops = '';
screenText.textContent = '';
}

//BASIC Functions
function add(a, b) {
  storedVal = parseFloat((a + b).toFixed(8));
  screenText.textContent = storedVal;
}

function subtract(a ,b) {
  storedVal = parseFloat((a - b).toFixed(8));
  screenText.textContent = storedVal;
}

function multiply(a, b) {
  storedVal = parseFloat((a * b).toFixed(8));
  screenText.textContent = storedVal;
}

function divide(a, b) {
  storedVal = parseFloat((a / b).toFixed(8));
  screenText.textContent = storedVal;
}

//OPERATOR Function
function operator() {
  if(ops === '+') {
    result = add(storedVal, parseInt(currentVal));
  } else if(ops === '-') {
    result = subtract(storedVal, parseInt(currentVal));
  } else if(ops === 'x') {
    result = multiply(storedVal, parseInt(currentVal));
  } else if(ops === '/') {
    result = divide(storedVal, parseInt(currentVal));
  }
  
  ops = '=';
}

//NEXT STEPS
//Click num x num + num - num =, along the way it operates and equals "stops" it in a way before moving onto the next number.
//Allow for a "string of numbers", like the number = 1832
//Clear button makes currentValue a 0, so any more numbers clicked and it addes to the zero lol