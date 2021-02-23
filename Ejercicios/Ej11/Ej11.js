function mover() {
    var cajas = document.getElementsByClassName('cajas');
    var caja = document.getElementsByClassName('caja');
    console.log(caja[0]);

    //   cajas[0].style.justifyItems = 'end';

    caja[0].style.transition = "all 5s";
    caja[0].style.transform = "translate(400px,120px)"
    caja[1].style.transition = "all 5s";
    caja[1].style.transform = "translate(400px,-120px)"
    caja[2].style.transition = "all 5s";
    caja[2].style.transform = "translate(400px,120px)"
    caja[3].style.transition = "all 5s";
    caja[3].style.transform = "translate(400px,-120px)"
        // caja[0].style.gridArea = ' 2 / 1 / 3 / 2';
        // caja[1].style.gridArea = ' 1 / 1 / 2 / 2';
        // caja[2].style.gridArea = ' 4 / 1 / 5 / 2';
        // caja[3].style.gridArea = ' 3 / 1 / 4 / 2';

}


function volver() {
    var cajas = document.getElementsByClassName('cajas');
    var caja = document.getElementsByClassName('caja');
    console.log(caja[0]);

    //   cajas[0].style.justifyItems = 'end';

    caja[0].style.transition = "all 5s";
    caja[0].style.transform = "initial"
    caja[1].style.transition = "all 5s";
    caja[1].style.transform = "initial"
    caja[2].style.transition = "all 5s";
    caja[2].style.transform = "initial"
    caja[3].style.transition = "all 5s";
    caja[3].style.transform = "initial"
        // caja[0].style.gridArea = ' 2 / 1 / 3 / 2';
        // caja[1].style.gridArea = ' 1 / 1 / 2 / 2';
        // caja[2].style.gridArea = ' 4 / 1 / 5 / 2';
        // caja[3].style.gridArea = ' 3 / 1 / 4 / 2';

}