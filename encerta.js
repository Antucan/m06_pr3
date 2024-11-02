const numRand = window.opener.numRand;
const div1 = window.opener.div1;
let div2 = document.getElementById("resolve");
let div3 = document.getElementById("cookie");
let trys = 0;
let isClosed = false;
let isWin = false;

window.addEventListener('load', function () {
    if (this.document.cookie.includes("win")) {
        isWin = true;
        div3.innerHTML = "The user previously won!";
    } else if (document.cookie.includes("lose")) {
        div3.innerHTML = "The user previously lost!";
    } else {
        div3.innerHTML = "New Game";
    }
})

window.addEventListener('beforeunload', function (event) {
    isClosed = true;
});
setTimeout(function () { window.close(), isWin = false }, 7000);

setInterval(function () {
    if (isClosed) {
        div1.innerHTML = parseInt(trys + 1) + " intentos";
    }
})

function compare() {
    let numUser = parseInt(document.getElementById("num").value);
    if (numUser == numRand) {
        div1.innerHTML = "The numbers are equals";
        div2.innerHTML = "The numbers are equals";
        document.cookie = "win";
        isWin = true;
        window.close();
    } else {
        trys++;
        div1.innerHTML = "The numbers doesn't match";
        div2.innerHTML = "The numbers doesn't match";
        document.cookie = "lose";
    }
}