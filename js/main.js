var canvas;
var circle;

var canvasWidth, canvasHeight;

var framerate = 60;

function setup() {
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(0, 0);
    frameRate(framerate);

    circleColor = color(200, 100, 100);
    circle = new Circle(0, 0, 100, circleColor);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(20, 20, 20);

    keyPresses();

    circle.render();
    circle.update();
    circle.edges();
}

function keyPresses() {
    if (keyIsDown(UP_ARROW)) {
        circle.move(circle.directions.UP);
    }
    if (keyIsDown(DOWN_ARROW)) {
        circle.move(circle.directions.DOWN);
    }
    if (keyIsDown(LEFT_ARROW)) {
        circle.move(circle.directions.LEFT);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        circle.move(circle.directions.RIGHT);
    }
}
