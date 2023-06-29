let canvas = document.getElementById('meu-quadro');
let logoIfsp = document.getElementById('logo-ifsp');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 10;
canvas.width = window.innerWidth;

const RAIO_BOLA = 20;

function desenhaBola(x, y) {
ctx.beginPath();
ctx.arc(x, y, RAIO_BOLA, 0, 2 * Math.PI);
ctx.closePath();

// Utilizando o caminho criado desenhe o caminho
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
// ctx.stroke();

// Preencha o caminho
ctx.fillStyle = "blue";
ctx.fill();
}

let x = RAIO_BOLA;
let y = RAIO_BOLA;
let velX = 2;
let velY = 2;

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhaBola(x, y);
    x += velX;
    y += velY;

    if (x > (canvas.width - RAIO_BOLA))
        velX *= -1;
    if (y > (canvas.height - RAIO_BOLA))
        velY *= -1;
    if (x < RAIO_BOLA)
        velX *= -1;
    if (y < RAIO_BOLA)
        velY *= -1;

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

