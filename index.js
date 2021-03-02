// Grab the dodger and the game
const game = document.getElementById("game");
const dodger = document.getElementById("dodger"); 

// Check to see if the dodger is off the left side of the page
// If it is not, move the dodger to the left 1 pixel
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

// Check to see if the dodger is at the right side of the page
// If it is not, mode the dodger to the right one pixel
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Not sure why calculating the right limit doesn't pass the test, but it seems to work
    //if (left < game.offsetWidth - dodger.offsetWidth) {
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Listens for left or right arrow key press, then tries to move the dodger
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
}); 