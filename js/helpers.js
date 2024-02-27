/**
 * a function that translates radius and theta to cartesian coordinates and returns x and y in an object
 */
function transformPolarToCartesian(radius, theta) {
    //calculate x and y using the cosine and sine formula
    const x = radius * cos(theta);
    const y = radius * sin(theta);

    //store x and y inside cartesianCoordinates object
    //from now on cartesianCoordiantes.x is the same as x
    //from  now on cartesianCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }
    
    //return the stored data so that it can be used outside of the function
    return cartesianCoordinates;
}

/**
 * Change the fill color of the shape to a random RGB generated color
 */
function changeColor() {
    // generate random RGB code
    const r = random(255);
    const g = random(255);
    const b = random(255);

    //apply fill with that color
    fill(r, g, b);
}

/**
 * Draw a circle in the middle of the canvas
 */
function drawCircle() {
    //radius of the circle which is constant
    const radius = 50;

    //loop through a whole circle - 0 to 360 degrees
    for(let theta = 0; theta < 360; theta = theta + 1) {
        // get cartesian points at each step of the theta loop
        const cartesianCoordinates = transformPolarToCartesian(radius, theta);

        //draw a point in those coordinates
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
    }
}

// offset of the spiral starts at 0 and is updated as drawSpiral happen
let offset = 0;

/**
 * Draw a spiral in the middle of the canvas
 * Formula of spiral r = k * theta
 */
function drawSpiral() {

    background(0, 2);

    //radius starts at zero and will increase with the formula of the spiral
    let r = 0;
    //constant of proportion between r and theta
    const k = 0.1 + offset * 0.001;

    // constants needed if we want to draw the snail type spiral
    const a = 0.001;
    const b = 0.01;

    //loop through a whole circle - 0 to 360 degrees
    for(let theta = 0; theta < 3 * 360; theta = theta + 0.1) {
        //update r according to theta
        // r = k * theta;
        r = a * Math.exp(b * theta);
        
        //get the cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(r, theta + offset);

        //draw a point in those coordinates
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);
    }

    // update offset
    // offset = offset - 1;
}