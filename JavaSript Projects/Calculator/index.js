const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); // eval is like built in calculator "1+2+3" it will evaluate it normally
    }
    catch(error){
        display.value = "Error";
    }
}
// document.body.style.backgroundColor = "black";