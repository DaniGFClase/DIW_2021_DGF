var list = ["Levitating.ogg", "All Star.ogg", "Bad_to_the_bone.mp3", "Is_not_unusual.mp3"];
var i = 0;
var repro = false;

function music() {
    if (!repro) {
        repro = true;
        console.log("empieza");
        play();
    } else {
        console.log("para");
        repro = false;
        var audio = document.getElementById("audio");
        audio.pause();
    }

}

function play() {

    console.log("suena");

    if (i >= list.length) {
        i = 0;
        document.getElementById("audio").src = "CSS/Musica/" + list[i];
        var audio = document.getElementById("audio");
        audio.play();
    } else {
        document.getElementById("audio").src = "CSS/Musica/" + list[i];
        var audio = document.getElementById("audio");
        audio.play();
    }




}

function next() {
    i++;
    play();
}

function prev() {
    i--;
    play();
}