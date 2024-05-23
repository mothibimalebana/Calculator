const inputScreen = document.querySelector(".input");
let num1;
let num2;

function displayToScreen (num){
	inputScreen.textContent += num
}

//numberPad
const btn7 = document.querySelector("#btn7 button");
btn7.addEventListener("click",() => {displayToScreen(7)});

const btn4 = document.querySelector("#btn4 button");
btn4.addEventListener("click",() => {displayToScreen(4)});

const btn1 = document.querySelector("#btn1 button");
btn1.addEventListener("click",() => {displayToScreen(1)});


const btn8 = document.querySelector("#btn8 button");
btn8.addEventListener("click",() => {displayToScreen(8)});

const btn5 = document.querySelector("#btn5 button");
btn5.addEventListener("click",() => {displayToScreen(5)});

const btn2 = document.querySelector("#btn2 button");
btn2.addEventListener("click",() => {displayToScreen(2)});

const btn9 = document.querySelector("#btn9 button");
btn9.addEventListener("click",() => {displayToScreen(9)});

const btn6 = document.querySelector("#btn6 button");
btn6.addEventListener("click",() => {displayToScreen(6)});

const btn3 = document.querySelector("#btn3 button");
btn3.addEventListener("click",() => {displayToScreen(3)});

//operationPad
const btnMinus = document.querySelector("#btnMinus button");
btnMinus.addEventListener("click",() => {displayToScreen("-")});

const btnAdd = document.querySelector("#btnAdd button");
btnAdd.addEventListener("click",() => {displayToScreen("+")});

const btnMultiply = document.querySelector("#btnMultiply button");
btnMultiply.addEventListener("click",() => {displayToScreen("*")});


const btnDivide = document.querySelector("#btnDivide button");
btnDivide.addEventListener("click",() => {displayToScreen("/")});


const btnEquals = document.querySelector("#btnEquals button");
btnEquals.addEventListener("click",() => {displayToScreen("=")});

const btnAC = document.querySelector("#btnAC button");
btnAC.addEventListener("click",() => {inputScreen.textContent = " "});