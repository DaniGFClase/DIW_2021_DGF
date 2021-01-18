var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 1;
var dy = -1;
var paddleHeight = 75;
var paddleWidth = 10;
var paddleY = (canvas.height - paddleHeight) / 2;
var paddle2Y = (canvas.height - paddleHeight) / 2;
var up1Pressed = false;
var down1Pressed = false;

var up2Pressed = false;
var down2Pressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//J1
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
/*
        //J2
        function keyDownHandler(e) {
            if (e.keyCode == 87) {
                up2Pressed = true;
            } else if (e.keyCode == 83) {
                down2Pressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.keyCode == 87) {
                up2Pressed = false;
            } else if (e.keyCode == 83) {
                down2Pressed = false;
            }
        }



*/



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

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle1();
    drawPaddle2();

    if (x + dx < ballRadius) {
        dx = -dx;
    } else if (x + dx > canvas.width - ballRadius) {
        if (y > paddleY && y < paddleY + paddleHeight) {
            dx = -dx;
        } else {
            //  alert("GAME OVER");
            //    document.location.reload();
        }
    }

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;

    //controles J1
    if (up1Pressed && paddleY < canvas.height - paddleHeight) {
        console.log("abajo " + paddleY);
        paddleY += 2;
    } else if (down1Pressed && paddleY > 0) {
        console.log(paddleY);
        paddleY -= 2;
    }
    /*
                //controles J2
                if (up2Pressed && paddle2Y < canvas.height - paddleHeight) {
                    console.log("abajo " + paddle2Y);
                    paddle2Y += 2;
                } else if (down2Pressed && paddle2Y > 0) {
                    console.log(paddle2Y);
                    paddle2Y -= 2;
                }
    */
    x += dx;
    y += dy;
}

setInterval(draw, 10);