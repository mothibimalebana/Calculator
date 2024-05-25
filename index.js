const inputScreen = document.querySelector(".input");
let num1;
let num2;
let regEx;
let ans;
let operation;

//functions
	//screen operations
function displayToScreen (num){
	inputScreen.textContent += num
}
function clearScreen(){
	inputScreen.textContent = " "
}
function getNum1 (inputDisplay){
	num1 = Number(inputDisplay.slice(0));
}
function getRegex (inputDisplay){
	evaluateOperation(inputDisplay);

}
	//mathematical operations
function add(num1, num2){
	return num1 + num2
}
function minus(num1, num2){
	return num1 - num2
}
function multiply(num1, num2){
	return num1 * num2
}
function divide(num1, num2){
	return num1 / num2
}
function convertToNumber(string){
	return Number(string)
}
function determineOperation(operation){
	switch(operation){
		case '+':
			return ans = add(num1, num2)
		break;
	
		case '-':
			return ans = minus(num1, num2)
		break;

		case '×':
			return ans = multiply(num1, num2)
		break;
	
		case '÷':
			return ans = divide(num1, num2)
		break;
	}
}
	//evaluate operation
function evaluateOperation(regEx){
	operation = regEx.slice(1,2);
	num2 = Number(regEx.slice(2));
	determineOperation(operation);
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
btnMinus.addEventListener("click",() => {
	getNum1(inputScreen.textContent);
	clearScreen();
	displayToScreen("-")
});

const btnAdd = document.querySelector("#btnAdd button");
btnAdd.addEventListener("click",() => {
	getNum1(inputScreen.textContent);
	clearScreen();
	displayToScreen("+")
});

const btnMultiply = document.querySelector("#btnMultiply button");
btnMultiply.addEventListener("click",() => {
	getNum1(inputScreen.textContent);
	clearScreen();
	displayToScreen("×")
});


const btnDivide = document.querySelector("#btnDivide button");
btnDivide.addEventListener("click",() => {
	getNum1(inputScreen.textContent);
	clearScreen();
	displayToScreen("÷")
});


const btnEquals = document.querySelector("#btnEquals button");
btnEquals.addEventListener("click",() => {
	evaluateOperation(inputScreen.textContent);
	clearScreen();
	inputScreen.textContent = ans;
})

const btnAC = document.querySelector("#btnAC button");
btnAC.addEventListener("click",() => {inputScreen.textContent = " "});