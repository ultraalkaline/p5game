function Circle(x, y, radius, color) {
    this.position = createVector(x,
        y);
    this.radius = radius;

    this.velocity = createVector(0, 0);
    this.acceleration = 0.2;
    this.deceleration = 0.99;

    this.force;

    if (color != undefined) {
        this.color = color;
    } else {
        this.color = color(255, 255, 255);
    }

    this.directions = {
        UP: 3 * PI / 2,
        DOWN: PI / 2,
        LEFT: PI,
        RIGHT: 0
    }
    this.direction;

    // Renders the circle to the screen.
    this.render = function() {
        push();
        translate(this.position.x + this.radius / 2, this.position.y + this.radius / 2);
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);

        pop();
    }

    // Updates the position of the circle.
    this.update = function() {
        this.position.add(this.velocity);
        if (abs(this.velocity.x) <= 0.04 && abs(this.velocity.y) <= 0.04) {
            // Reset the velocity.
            this.velocity.x = 0;
            this.velocity.y = 0;
        } else {
            // Decelerate the circle.
            this.velocity.mult(this.deceleration);
        }
    }

    // Updates the velocity of the circle based on the direction it's heading in.
    this.move = function(direction) {
        this.force = p5.Vector.fromAngle(direction);
        this.force.mult(this.acceleration);
        this.velocity.add(this.force);
    }

    this.edges = function() {
        console.log(this.position.x);
        if (this.position.x >= canvasWidth) {
            console.log("OFFSCREEN");
        }
    }
}
