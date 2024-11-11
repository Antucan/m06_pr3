let colorDiv = document.getElementById("colorName");
let trysDiv = document.getElementById("trys");
let savedColor;
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
document.addEventListener('click', function (event) {
    //un window.opener que llama a una funcion de exercici02
    //llamada clickNewWindow() que se le pasa a los colores
    window.opener.clickNewWindow(randomColors, window);
});
