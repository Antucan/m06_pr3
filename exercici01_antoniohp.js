fetch("exercici01_antoniohp.html");
fetch("encerta.html");

document.getElementById("play").onclick = function () {
    let dir1 = document.getElementById("result");
    let num = Math.floor(Math.random() * 11);
    dir1.innerHTML = num;
    if (num < 5) {
        dir1.style.color = "red";
        window.open("encerta.html");
    } else if (num => 5) {
        dir1.style.color = "green";
        window.open("encerta.html");
    }
}
document.getElementById("compare").onclick = function () {
    let numOriginal = document.getElementById("result");
    let numUser = document.getElementById("num");
    let div1 = document.getElementById("guess");
    let div2 = document.getElementById("resolve");
    if (numOriginal === numUser) {
        div1.innerHTML = "The numbers are equals";
        div2.innerHTML = "The numbers are equals";
    } else {
        div1.innerHTML = "The numbers doesn't match";
        div2.innerHTML = "The numbers doesn't match";
    }
}