var mando = document.getElementById('instCoin');
var code = "";

var konam = " ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight a w r";
mando.addEventListener('keydown', (event) => {
    console.log(event.key);
    code = code + " " + event.key;

    console.log(code);

    if (code == konam) {
        console.log("genio xd");

        document.getElementById("frm").src = "easteregg.html"
    }

});