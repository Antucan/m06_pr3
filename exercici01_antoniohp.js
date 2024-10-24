document.getElementById("play").onclick = function () {
    let dir1 = document.getElementById("result");
    let num = Math.floor(Math.random() * 11);
    dir1.innerHTML = num;
    if (num < 5) {
        dir1.style.color = "red";
    } else if (num => 5){
        dir1.style.color = "green";
    }
}
