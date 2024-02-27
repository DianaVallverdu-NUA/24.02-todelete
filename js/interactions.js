//color button object
const colorButton = document.getElementById("color-changing-button");

//upon click of the color button, generate new random collor and change the fill of the shape
colorButton.onclick = () => {
    changeColor();
}

/**
 * function triggered every time the user scrolls
 * @param {WheelEvent} event event containing the wheel scrolling parameters 
 */
function mouseWheel(event) {
    changeColor();
    //delta means increment:
    //  if the user is scrolling quickly, it will be higher, if the user is scrolling slowly, it will be smaller
    const deltaWheel = event.delta * 0.1;

    //update offset
    offset = offset + deltaWheel;
}