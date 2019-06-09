var ball = document.getElementById("ball");
setInterval(gameLoop, 20);

function gameLoop() {
    var oldBallX = parseInt(ball.style.left || 0);
    var oldBallY = parseInt(ball.style.top || 0);

    var newBallX = oldBallX + 5;
    var newBallY = oldBallY + 5;
    ball.style.left = `${newBallX}px`;
    ball.style.top = `${newBallY}px`;
}

function getNewBallPosition(oldBallX, oldBallY) {

}