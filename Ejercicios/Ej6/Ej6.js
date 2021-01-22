var pxMov = document.getElementById('text');
var cuad = document.getElementById("cuadradoM");
var cuad2 = document.getElementById("cuadrado0");

var posCM, posCO;


function moverI() {
    let sum;

    posCM = cuad.getBoundingClientRect();

    sum = posCM.left - parseInt(pxMov.value, 10);
    cuad.style.left = sum + 'px';
}

function moverD() {
    let sum;

    posCM = cuad.getBoundingClientRect();

    sum = posCM.left + parseInt(pxMov.value, 10);
    cuad.style.left = sum + 'px';
}

function moverAr() {
    let sum;

    posCM = cuad.getBoundingClientRect();

    sum = posCM.top - parseInt(pxMov.value, 10);
    cuad.style.top = sum + 'px';
}

function moverAb() {
    let sum;

    posCM = cuad.getBoundingClientRect();

    sum = posCM.top + parseInt(pxMov.value, 10);
    cuad.style.top = sum + 'px';
}