let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Triângulo
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 50);
ctx.lineTo(50, 50);
ctx.closePath();
ctx.lineWidth = 4;
ctx.stroke();

// Círculo
ctx.beginPath();
ctx.arc(100, 100, 25, 0, Math.PI * 2)
ctx.closePath();
ctx.lineWidth = 4;
ctx.fillStyle = 'tomato';
ctx.fill();

// Retângulo
ctx.fillStyle = 'aqua';
ctx.fillRect(50, 200, 30, 70);

// Texto
ctx.fillStyle = 'blue';
ctx.fillText('Olá', 100, 200)