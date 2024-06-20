//variables
let num1, num2, op, regEx, result;
let operatorsArray = ['+', '*', '-', '/'];
let numberArray = ['0','1','2','3','4','5','6','7','8','9', '.'];

/*Screen*/
let inputScreen = document.querySelector(".inputScreen");
/*Keyboard*/
//first row
let C = document.querySelector("#C");
let M = document.querySelector("#M");
let numPerc = document.querySelector('#numPerc');
let numDivide = document.querySelector('#numDivide');
//second row
let no7 = document.querySelector("#no7");
let no8 = document.querySelector("#no8");
let no9 = document.querySelector("#no9");
let nox = document.querySelector("#nox");
//third row
let no4 = document.querySelector('#no4');
let no5 = document.querySelector('#no5');
let no6 = document.querySelector('#no6');
let numSubtract = document.querySelector('#numSubtract')
//fourth row
let no1 = document.querySelector('#no1');
let no2 = document.querySelector('#no2');
let no3 = document.querySelector('#no3');
let numAdd = document.querySelector('#numAdd');
//fifth row
let decimal = document.querySelector('#decimal');
let no0 = document.querySelector('#no0');
let del = document.querySelector('#del');
let numEquals = document.querySelector('#numEquals');

no7.addEventListener("click", () => displayRegEx('7'))
no8.addEventListener("click", () => displayRegEx('8'))
no9.addEventListener("click", () => displayRegEx('9'))
no4.addEventListener("click", () => displayRegEx('4'))
no5.addEventListener("click", () => displayRegEx('5'))
no6.addEventListener("click", () => displayRegEx('6'))
no1.addEventListener("click", () => displayRegEx('1'))
no2.addEventListener("click", () => displayRegEx('2'))
no3.addEventListener("click", () => displayRegEx('3'))
no0.addEventListener("click", () => displayRegEx('0'))
''

C.addEventListener("click", () => clear())
decimal.addEventListener("click", () => operatorClicked('.'))
numAdd.addEventListener("click", () => operatorClicked('+'))
numSubtract.addEventListener("click", () => operatorClicked('-'))
numDivide.addEventListener("click", () => operatorClicked('/'))
nox.addEventListener("click", () => operatorClicked('x'))
numEquals.addEventListener("click", () => displayResult(result))

function displayRegEx(num){
	clearScreen();
	if(numberArray.includes(num)) {
	inputScreen.textContent += num
	}
	else{
	}
}
function clearScreen(){
	inputScreen.textContent = " ";
}
function getNum1(){
	num1 = Number(inputScreen.textContent);
}
function getNum2(op){
	if(result === undefined){
		switch(op){
			case '+':
				num2 = 0;
				break;
			case '-':
				num2 = 0;
				break;
			case 'x':
				num2 = 1;
				break;
			case '/':
				num2 = 1;
				break;
			default:
				alert("invalid operator");
		}
	}
	else{
		num2 = result;
	}
}

//arithmetic functions
function add(num1, num2){
	return num1 + num2
}
function subtract(num1, num2){
	return num1 - num2
}
function multiply(num1, num2){
	return num1 * num2
}
function divide(num1, num2){
	return num1 / num2
}
function clear(){
	inputScreen.textContent = ' ';
	num1 = 0;
	num2 = 0;
	result = 0;
}
//operate function
function operate(op, num1, num2){
	switch(op){
		case '+':
			result = add(num1, num2);
			break;
		case '-':
			result = subtract(num1, num2);
			break;
		case 'x':
			multiply(num1, num2);
			break;
		case '/':
			divide(num1, num2);
			break;
		default:
			alert("invalid operator");
	}
	return result

}

function operatorClicked(op){
	getNum1();
	getNum2(op);
	operate(op, num1, num2);
	inputScreen.textContent = result
}