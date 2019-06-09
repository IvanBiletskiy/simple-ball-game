var DEFAULT_SPEED = 1;
var BALL_DIAMETER = 20;
var boardSize = { x: 400, y: 300 };
var ball = document.getElementById("ball");
var currentDirection = {
    x: 1,
    y: 1
}
setInterval(gameLoop, 1);

function gameLoop() {
    var ballPosition = {
        x: parseInt(ball.style.left || 0),
        y: parseInt(ball.style.top || 0)
    }

    var newBallPosition = getNewBallPosition(ballPosition);
    ball.style.left = `${newBallPosition.x}px`;
    ball.style.top = `${newBallPosition.y}px`;
}

function getNewBallPosition(oldBallPosition) {
    var newBallPosition = {
        x: oldBallPosition.x + DEFAULT_SPEED * currentDirection.x,
        y: oldBallPosition.y + DEFAULT_SPEED * currentDirection.y
    }

    var intersections = getIntersections(newBallPosition);
    if (Object.values(intersections).includes(true)) {
        if (intersections.top || intersections.bottom) {
            currentDirection.y = -(currentDirection.y);
        }
        if (intersections.left || intersections.right) {
            currentDirection.x = -(currentDirection.x);
        }
    }

    return newBallPosition;
}

function getIntersections(ballPosition) {
    var ballSizes = {
        xStart: ballPosition.x,
        xEnd: ballPosition.x + BALL_DIAMETER,
        yStart: ballPosition.y,
        yEnd: ballPosition.y + BALL_DIAMETER
    };
    var intersections = {
        top: ballSizes.yStart < 0,
        left: ballSizes.xStart < 0,
        bottom: ballSizes.yEnd > boardSize.y,
        right: ballSizes.xEnd > boardSize.x
    }
    return intersections;
};
