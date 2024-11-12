//variables que voy a usar mas adelante
let countDiv = document.getElementById("countdown");
let countTime;
let countStart;
let firstWindow = true;
let prueba = document.getElementById("prueba");

//updating the countdown
function startCountdown() {
    if (countStart) {
        clearInterval(countStart);
    }
    //reseting the count
    countTime = 6;

    //starting the count
    countStart = setInterval(function () {
        if (countTime >= 0) {
            countDiv.innerHTML = countTime;
            countTime--;
        }
        if (countTime < 0) {
            clearInterval(countStart);
            clearInterval(windowInterval);
        }
    }, 1000);

    let windowInterval = setInterval(function () {
        let randLeft = Math.floor(Math.random() * window.screen.width);
        let randTop = Math.floor(Math.random() * window.screen.height);
        let newWindow;
        if (firstWindow) {
            newWindow = window.open("newWindow.html", "", "left=750,top=250,width=500,height=500");
            firstWindow = false;
        } else {
            newWindow = window.open("newWindow.html", "", `left=${randLeft},top=${randTop},width=500,height=500`);
        }
    }, 3000);
};

document.body.style.backgroundColor = savedColor;
function clickNewWindow(color, window) {
    let colorsArray = [color];
    document.getElementById("prueba").innerHTML = colorsArray;
}


