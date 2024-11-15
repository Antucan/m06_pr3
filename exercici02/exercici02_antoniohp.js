//variables que voy a usar mas adelante
let countDiv = document.getElementById("countdown");
let countTime;
let countStart;
let windowInterval;
let firstWindow = true;
let prueba = document.getElementById("prueba");
let result = document.getElementById("result");
let openedWindows = 0;

//updating the countdown
function startCountdown() {
    if (countStart) {
        clearInterval(countStart);
        clearInterval(windowInterval);
    }
    //reseting the count
    countTime = 30;

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
        if (result.innerHTML == 'You won!') {
            clearInterval(countStart);
            clearInterval(windowInterval);
        }
    }, 1000);

    windowInterval = setInterval(function () {
        let randLeft = Math.floor(Math.random() * window.screen.width);
        let randTop = Math.floor(Math.random() * window.screen.height);
        let newWindow;
        if (firstWindow) {
            newWindow = window.open("newWindow.html", "", "left=750,top=250,width=500,height=500");
            firstWindow = false;
        } else {
            newWindow = window.open("newWindow.html", "", `left=${randLeft},top=${randTop},width=500,height=500`);
        }
        openedWindows++;
    }, 3000);
};
let firstClick = null;
let secondClick = null;
let clickCount = 0;
let arrayColors = [
    "#800000",
    "#808000",
    "#008080",
    "#808080"
];
let colorNames = {
    "#800000": "Marrón oscuro",
    "#808000": "Oliva",
    "#008080": "Verde agua",
    "#808080": "Gris"
};
let randomColors = arrayColors[Math.floor(Math.random() * arrayColors.length)];
function clickNewWindow(color, window) {
    clickCount++;
    if (clickCount == 1) {
        firstClick = [color, window];
        // document.getElementById("prueba").innerHTML = firstClick;
    } else if (clickCount == 2) {
        secondClick = [color, window];
        // document.getElementById("prueba").innerHTML = firstClick + secondClick;
        if (firstClick[0] === secondClick[0]) {
            if (firstClick[1] !== secondClick[1]) {
                console.log('Colores iguales || Ventanas diferentes');
                firstClick[1].close();
                secondClick[1].close();
                clickCount = 0;
                firstClick = null;
                secondClick = null;
                openedWindows -= 2;
            } else {
                console.log('Colores iguales || Misma ventana');
                clickCount = 0;
                firstClick = null;
                secondClick = null;
            }
        } else {
            console.log('Colores diferentes');
        }
        clickCount = 0;

        if (openedWindows === 0) {
            console.log('Ninguna ventana abierta, ganaste!');
            result.innerHTML = 'You won!';
        }
    }
}
