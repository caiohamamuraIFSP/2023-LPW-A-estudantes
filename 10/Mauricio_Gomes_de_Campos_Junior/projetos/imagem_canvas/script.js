let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let logo = document.createElement('img');
logo.src = "https://ifsp.edu.br/images/Marca_IFSP_2015031.png";

let alturaLogo;
let larguraLogo;
logo.onload = function() {
    alturaLogo = logo.height;
    larguraLogo = logo.width;
    console.log(alturaLogo);
}

let x = 50;
let y = 200;
let velX = 2;
let velY = 2;

ctx.drawImage(logo, x, y);

function loop() {
    x += velX;
    y += velY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(logo, x, y);

    if (
        y >= canvas.height - alturaLogo ||
        y <= 0
        ) {
        velY *= -1; 
    }
    if (
        x >= canvas.width - larguraLogo ||
        x <= 0
        ) {
        velX *= -1; 
    }
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);