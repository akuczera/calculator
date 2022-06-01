//Function that displays the text of the buttons that we press in the
//calculator.
  //Listen for when a button is pressed
  //Take that value and make sure it's a string (i think).
  //Push that text into the display <p>
 document.querySelectorAll('button').forEach(button => button.addEventListener('click', display));

 function display() {
  console.log("button clicked");
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