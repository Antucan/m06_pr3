let numRand;
let div1;
let div2;

function generate() {
    div1 = document.getElementById("result");
    numRand = Math.floor(Math.random() * 10);
    div1.innerHTML = numRand;
    if (numRand < 5) {
        div1.style.color = "red";
    } else {
        div1.style.color = "green";
    }
    const newWindow = window.open("encerta.html", "", "width=500,height=500");
    newWindow.opener.document.getElementById("result");

};
function compare() {
    let numUser = parseInt(document.getElementById("num").value);
    let numParent = window.parent.getElementById("result");
    if (numUser == numParent) {
                    div1.innerHTML = "The numbers are equals";
                    div2.innerHTML = "The numbers are equals";
                } else {
                    div1.innerHTML = "The numbers doesn't match";
                    div2.innerHTML = "The numbers doesn't match";
                }
}

// document.getElementById("compare").onclick = function () {
//     window.displayRandomNumber = (number) => {
//         let numUser = parseInt(document.getElementById("num").value);
//         div2 = document.getElementById("resolve");
//         if (numUser == number) {
//             div1.innerHTML = "The numbers are equals";
//             div2.innerHTML = "The numbers are equals";
//         } else {
//             div1.innerHTML = "The numbers doesn't match";
//             div2.innerHTML = "The numbers doesn't match";
//         }
//     }
// };


