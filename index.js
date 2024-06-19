//variables
let num1, num2, op, regEx;
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
decimal.addEventListener("click", () => displayRegEx('.'))
numAdd.addEventListener("click", () => displayRegEx('+'))
numSubtract.addEventListener("click", () => displayRegEx('-'))
numDivide.addEventListener("click", () => displayRegEx('/'))
nox.addEventListener("click", () => displayRegEx('x'))

function getRegEx(){
	regEx = inputScreen.textContent;
}
function sliceRegex(){

}
function displayRegEx(num){
	if(numberArray.includes(num)) {
	inputScreen.textContent += num
	}
	else{
	}

}
function operatorClear(){
	inputScreen.textContent = " "
}
function clear(){
	num1 = " "
	num2 = " "
	op = " "
	inputScreen.textContent = " "
}
function stringToNumber(string){
	return num1 = Number(num1);
}
function spliceRegEx(regEx){
	op = regEx[0].slice(0);
	num1 = regEx.slice(1);
	stringToNumber(num1);
}
function isOperator(regEx){
	if (operatorsArray.includes(regEx[0])){
		spliceRegEx(regEx);
	}
	else{
		stringToNumber(regEx)
	}
}
function isNumber(regex){
	if(numberArray.includes(regex)){
		return true
	}
	else{
		return false
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

//operate function
function operate(op, num1, num2){
	switch(op){
		case '+':
			if(num2 === undefined){
				num2 = 0;
			}
			result = add(num1,num2)
			break;
		case '-':
			if(num2 === undefined){
				num2 = 0;
			}
			result = subtract(num1,num2)
			break;
		case '*':
			if(num2 === undefined){
				num2 = 1;
			}
			result = multiply(num1,num2)
			break;
		case '/':
			if(num2 === undefined){
				num2 = 1;
			}
			result = divide(num1,num2)
			break;
		default:
			alert("invalid operator");
	}
	displayResult(result);
}
function displayResult(result){
	inputScreen.textContent = result;
}