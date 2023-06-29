var image = document.getElementById("myImage");

var x = 0;
var y = 0;

var dx = 2;
var dy = 2;

function updatePosition() {
    x += dx;
    y += dy;
    
    image.style.left = x + "px";
    image.style.top = y + "px";
    
    if (x + image.width >= window.innerWidth || x <= 0) {
        dx = -dx;
    }
    
    if (y + image.height >= window.innerHeight || y <= 0) {
        dy = -dy;
    }
}

function startAnimation() {
    setInterval(updatePosition, 10); 
}

window.onload = startAnimation;
