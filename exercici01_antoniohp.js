document.getElementById("play").onclick = function () {
    let dir1 = document.getElementById("result");
    dir1.innerHTML = Math.floor(Math.random() * 11);
}
