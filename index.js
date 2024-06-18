//variables
let num1, num2, op;

//arithmetic functions
function add(num1, num2) {
	return num1 + num2
}
function subtract(num1, num2) {
	return num1 - num2
}
function multiply(num1, num2) {
	return num1 * num2
}
function divide(num1, num2) {
	return num1 / num2
}

//operate function
function operate(op, num1, num2){
	switch(op){
		case '+':
			result = add(num1,num2)
			break;
		case '-':
			result = subtract(num1,num2)
			break;
		case '*':
			result = multiply(num1,num2)
			break;
		case '/':
			result = divide(num1,num2)
			break;
		default:
			alert("invalid operator");
	}
	return result;
}