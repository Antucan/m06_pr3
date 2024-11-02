let numRand;
let div1;

function generate() {
    div1 = document.getElementById("result");
    numRand = Math.floor(Math.random() * 10);
    div1.innerHTML = numRand;
    if (numRand < 5) {
        div1.style.color = "red";
    } else {
        div1.style.color = "green";
    }
    window.div1 = div1;
    window.numRand = numRand;
    const newWindow = window.open("encerta.html", "", "width=500,height=500");

};


