let colorDiv = document.getElementById("colorName");
let trysDiv = document.getElementById("trys");
//declarating colors
let arrayColors = [
    "#800000",
    "#808000",
    "#008080",
    "#808080"
];
//objeto con los nombres asociados al color
let colorNames = {
    "#800000": "Marrón oscuro",
    "#808000": "Oliva",
    "#008080": "Verde agua",
    "#808080": "Gris"
};
let randomColors = arrayColors[Math.floor(Math.random() * arrayColors.length)];

document.body.style.backgroundColor = randomColors;
colorDiv.innerHTML = colorNames[randomColors];
//saving color
let count = 0;
let SavedColor = "";
document.addEventListener('click', function (event) {
    //document.body.style.backgroundColor = "white";
});