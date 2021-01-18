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

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + ptos1, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle1();
    drawPaddle2();
    collisionDetection();
    drawScore();

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
    if (dx == -1) {
        if (y > (paddle2Y + paddleHeight) / 2 && paddle2Y < canvas.height - paddleHeight) {
            //   console.log("abajo " + paddle2Y);
            paddle2Y += 2;
        } else if (y < (paddle2Y + paddleHeight) / 2 && paddle2Y > 0) {
            //  console.log("arriba: " + paddle2Y);
            paddle2Y -= 2;
        }
    }
}


function collisionDetection() {
    //Rebotar en las palas
    switch (dx) {
        case 1:
            if (x + dx < ballRadius) {
                dx = -dx;
            } else if (x + dx > canvas.width - ballRadius) {
                if (y > paddleY && y < paddleY + paddleHeight) {
                    dx = -dx;
                } else {
                    //  alert("GAME OVER");
                    //  document.location.reload();
                    x = canvas.width / 2;
                    y = canvas.height / 2;

                    ptos1++;
                    console.log("ptos1 = " + ptos1);
                }
            }
            break;

        case -1:
            if (x + dx > canvas.width - ballRadius) {
                dx = -dx;
            } else if (x + dx < ballRadius) {
                if (y > paddle2Y && y < paddle2Y + paddleHeight) {
                    dx = -dx;
                } else {
                    //  alert("GAME OVER");
                    //  document.location.reload();
                    x = canvas.width / 2;
                    y = canvas.height / 2;
                    ptos2++;
                    console.log("ptos2 = " + ptos2);
                }
            }
            break;

        default:
            break;
    }
}

setInterval(draw, 10);