const myBox = document.getElementById("myBox");


document.addEventListener("keydown",event =>{
    myBox.textContent="🤯";
    myBox.style.background = "black";
});
document.addEventListener("keyup",event =>{
    myBox.textContent="🙂";
    myBox.style.background = "rgb(97, 0, 162)";
});

let x = 0 ;
let y = 0;
const moveAmount = 10;

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
