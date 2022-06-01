let screenText = document.querySelector('div.display');
console.log(screenText.textContent);

let num1;
let num2;

//Function that displays the text of the buttons that we press in the
//calculator.
  //Listen for when a button is pressed
  //Take that value and make sure it's a string (i think).
  //Push that text into the display <p>
 document.querySelectorAll('button.num').forEach(button => button.addEventListener('click', () => display(button.textContent)));

 function display(digit) {
  screenText.textContent = digit; 
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
    add(num1, num2);
  } else if(symbol === '-') {
    subtract(num1, num2);
  } else if(symbol === '*') {
    multiply(num1, num2);
  } else if(symbol === '/') {
    divide(num1, num2);
  }
}