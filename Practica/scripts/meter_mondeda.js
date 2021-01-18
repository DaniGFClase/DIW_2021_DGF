function meter_moneda() {
    document.getElementById("myCanvas").style.display = "block";
    document.getElementById("insrtC").style.display = "none";
    document.getElementById("menu").style.display = "block";


    document.addEventListener('keydown', (event) => {
        if (event.key == "a") {
            empezar_Juego();
        } else if (event.key == "r") {
            clearInterval(juego);
        }
    });


}