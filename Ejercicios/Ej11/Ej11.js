function mover() {
    var cajas = document.getElementsByClassName('cajas');
    var caja = document.getElementsByClassName('caja');
    console.log(caja[0]);

    caja[0].style.transition = "all 5s";
    caja[0].style.transform = "translate(400px,120px)"
    caja[1].style.transition = "all 5s";
    caja[1].style.transform = "translate(400px,-120px)"
    caja[2].style.transition = "all 5s";
    caja[2].style.transform = "translate(400px,120px)"
    caja[3].style.transition = "all 5s";
    caja[3].style.transform = "translate(400px,-120px)"

}


function volver() {
    var cajas = document.getElementsByClassName('cajas');
    var caja = document.getElementsByClassName('caja');
    console.log(caja[0]);

    caja[0].style.transition = "all 5s";
    caja[0].style.transform = "initial"
    caja[1].style.transition = "all 5s";
    caja[1].style.transform = "initial"
    caja[2].style.transition = "all 5s";
    caja[2].style.transform = "initial"
    caja[3].style.transition = "all 5s";
    caja[3].style.transform = "initial"


}