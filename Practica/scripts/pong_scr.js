/*
canvas -> es el canvas
ctx -> para que canvas sea en 2 d
ballRadius -> radio de la bola
x, y -> posicion de la bola
dx, dy -> direccion de la bola
paddleHeight -> altura de la pala
paddleWidth -> ancho de la pala
paddleY, paddle2Y -> posicion y de la pala
up1Pressed, down1Pressed -> control de la pala
ptos1, ptos2 -> puntuaciones
*/
var juego;


function empezar_Juego() {
    document.getElementById("myCanvas").style.display = "block";
    document.getElementById("menu").style.display = "none";

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ballRadius = 10;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var dx = 1;
    var dy = -1;
    var paddleHeight = 75;
    var paddleWidth = 10;
    var paddleY = (canvas.height - paddleHeight) / 2;
    var up1Pressed = false;
    var down1Pressed = false;

    var paddle2Y = (canvas.height - paddleHeight) / 2;

    var ptos1 = 0;
    var ptos2 = 0;


    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    //J1 controles
    function keyDownHandler(e) {
        if (e.keyCode == 40) {
            up1Pressed = true;
        } else if (e.keyCode == 38) {
            down1Pressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 40) {
            up1Pressed = false;
        } else if (e.keyCode == 38) {
            down1Pressed = false;
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle1() {
        ctx.beginPath();
        ctx.rect(canvas.width - paddleWidth, paddleY, paddleWidth, paddleHeight);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle2() {
        ctx.beginPath();
        ctx.rect(0, paddle2Y, paddleWidth, paddleHeight);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    function ptosIA() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + ptos1, 8, 20);
    }

    function mdio() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("----", 0, paddle2Y + paddleHeight / 2);
    }


    function ptosIJ() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + ptos2, canvas.width - 65, 20);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle1();
        drawPaddle2();
        collisionDetection();
        ptosIA();
        ptosIJ();
        ganar();
        mdio();

        //Rebotar arriba y abajo
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }
        x += dx;
        y += dy;

        //controles J1
        if (up1Pressed && paddleY < canvas.height - paddleHeight) {
            paddleY += 2;
        } else if (down1Pressed && paddleY > 0) {
            paddleY -= 2;
        }

        //controles J2
        if (dx < 0) {
            if (y > paddle2Y + paddleHeight / 2 && paddle2Y < canvas.height - paddleHeight) {
                paddle2Y += 4;
            } else if (y < paddle2Y + paddleHeight / 2 && paddle2Y > 0) {
                paddle2Y -= 4;
            }
        }
    }


    function collisionDetection() {
        //Rebotar en las palas
        if (dx > 0) {
            if (x + dx < ballRadius) {
                dx = -dx;
            } else if (x + dx > canvas.width - ballRadius) {
                if (y > paddleY && y < paddleY + paddleHeight) {
                    dx = -dx;
                } else {
                    x = canvas.width / 2;
                    y = canvas.height / 2;
                    ptos1++;
                    console.log("ptos1 = " + ptos1);
                }
            }
        } else {
            if (x + dx > canvas.width - ballRadius) {
                dx = -dx;
            } else if (x + dx < ballRadius) {
                if (y > paddle2Y && y < paddle2Y + paddleHeight) {
                    dx = -dx;
                } else {
                    x = canvas.width / 2;
                    y = canvas.height / 2;
                    ptos2++;
                    console.log("ptos2 = " + ptos2);
                }
            }
        }

    }


    function ganar() {
        if (ptos1 == 3) {
            console.log("J1 g");
            clearInterval(juego);
        } else if (ptos2 == 3) {
            console.log("J2 g");
            clearInterval(juego);
        }
    }

    juego = setInterval(draw, 10);
}