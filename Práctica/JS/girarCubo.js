var cubo = document.querySelector('.cubo');
var posiAct = '';
var inter;
var cont = 0;
var giro = ['giroDelante', 'giroDerecha', 'giroAtras', 'giroIzquierda', 'giroArriba', 'giroAbajo'];

function girar() {

    inter = setInterval(() => {
        var girarCara = giro[cont];
        cont++;
        if (posiAct) {
            cubo.classList.remove(posiAct);
        }
        cubo.classList.add(girarCara);
        posiAct = girarCara;
        if (cont == giro.length) {
            cont = 0;
        }
    }, 1000);
}

window.onload = girar;