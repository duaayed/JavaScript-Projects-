const display = document.getElementById("dispaly");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false ;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
        
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
 
function reset(){
    clearInterval(timer);
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false ;
    display.textContent = "00:00:00:00";
}

function update(){

}