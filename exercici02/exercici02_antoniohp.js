//variables que voy a usar mas adelante
let countDiv = document.getElementById("countdown");
let countTime = 30;
let countStart;
let firstWindow = true;

//updating the countdown
function startCountdown() {
    if (countStart) {
        clearInterval(countStart);
    }
    //reseting the count
    countTime = 30;

    //starting the count
    countStart = setInterval(function () {
        if (countTime >= 0) {
            countDiv.innerHTML = countTime;
            countTime--;
        }
    }, 1000);

    setInterval(function () {
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

