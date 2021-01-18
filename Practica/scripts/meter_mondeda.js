function meter_moneda() {
    var niv = 1;
    document.getElementById("insrtC").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("dicif").innerHTML = "Dificultad(min=1 max=7): " + niv;


    document.addEventListener('keydown', (event) => {

        if (event.key == "a") {
            clearInterval(juego);
            empezar_Juego(niv);
        } else if (event.key == "r") {
            clearInterval(juego);
            meter_moneda();
        } else if (event.key == "w") {
            niv++;

            if (niv > 7) {
                niv = 7;
            }
            document.getElementById("dicif").innerHTML = "Dificultad(min=1 max=7): " + niv;
        } else if (event.key == "e") {
            niv--;

            if (niv < 1) {
                niv = 1;
            }

            document.getElementById("dicif").innerHTML = "Dificultad(min=1 max=7): " + niv;
        }


    });


}