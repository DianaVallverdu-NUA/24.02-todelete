

function setup() {

    angleMode(DEGREES);

    createCanvas(windowWidth, windowHeight);

    background(220);

    noStroke();

    //fill(255, 0, 0);
    changeColor();
}

function draw() {
    translate(width / 2, height / 2);

    drawSpiral();
}