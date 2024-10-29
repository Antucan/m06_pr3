document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("play").onclick = function () {
        let dir1 = document.getElementById("result");
        let num = Math.floor(Math.random() * 11);
        var numRand = document.getElementById('result').innerHTML = num;
        if (numRand < 5) {
            dir1.style.color = "red";
            window.open("encerta.html");
        } else if (numRand => 5) {
            dir1.style.color = "green";
            window.open("encerta.html");
        }
    };

    document.getElementById("compare").onclick = function () {
        let numUser = parseInt(document.getElementById("num").value);
        let numOriginal = document.getElementById("result").innerHTML;
        let div1 = document.getElementById("guess");
        let div2 = document.getElementById("resolve");
        if (result === numRand) {
            div1.innerHTML = "The numbers are equals";
            div2.innerHTML = "The numbers are equals";
        } else {
            div1.innerHTML = "The numbers doesn't match";
            div2.innerHTML = "The numbers doesn't match";
        }
    }
})

