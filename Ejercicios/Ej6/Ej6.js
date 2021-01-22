var pxMov = document.getElementById('text');
var cuad = document.getElementById("cuadradoM");
var sum;

var domRect;
console.log(domRect);



function moverI() {
    domRect = cuad.getBoundingClientRect();

    sum = parseInt(pxMov.value, 10) + domRect.left;
    cuad.style.left = sum + 'px';

    console.log(domRect.left);
}

function moverD() {
    domRect = cuad.getBoundingClientRect();

    sum = parseInt(pxMov.value, 10) + domRect.right;
    cuad.style.right = sum + 'px';

    console.log(domRect.right);
}

function moverAr() {

}

function moverAb() {

}