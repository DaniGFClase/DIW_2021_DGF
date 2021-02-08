var list = ["Levitating.ogg", "All Star.ogg", "Bad_to_the_bone.mp3", "Is_not_unusual.mp3"];
var i = 0;

function play() {

    if (i >= list.length) {
        console.log("aa " + i);
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