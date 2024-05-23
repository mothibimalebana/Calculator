const inputScreen = document.querySelector(".input");

function calc (num){
	inputScreen.textContent += num
}

const btn7 = document.querySelector("#btn7 button");
btn7.addEventListener("click",() => {calc(7)});

const btn4 = document.querySelector("#btn4 button");
btn4.addEventListener("click",() => {calc(4)});

const btn1 = document.querySelector("#btn1 button");
btn1.addEventListener("click",() => {calc(1)});


const btn8 = document.querySelector("#btn8 button");
btn8.addEventListener("click",() => {calc(8)});

const btn5 = document.querySelector("#btn5 button");
btn5.addEventListener("click",() => {calc(5)});

const btn2 = document.querySelector("#btn2 button");
btn2.addEventListener("click",() => {calc(2)});

const btn9 = document.querySelector("#btn9 button");
btn9.addEventListener("click",() => {calc(9)});

const btn6 = document.querySelector("#btn6 button");
btn6.addEventListener("click",() => {calc(6)});

const btn3 = document.querySelector("#btn3 button");
btn3.addEventListener("click",() => {calc(3)});