const display = document.querySelector(".display");

function appendToDisplay(input){
	if(display) display.value += input;
}

function clearDisplay(){
	if(display) display.value = "";
}

function calculate(){
	if(!display) return;
		try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}
