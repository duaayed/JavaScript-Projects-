
let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let running=true;
let guess;
let attempts = 0;
while(running){

    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! try again");
        }
        else if(guess > answer){
            window.alert("Too high! try again");
        }
        else{
            window.alert(`Correct! the answer was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }
    }


}