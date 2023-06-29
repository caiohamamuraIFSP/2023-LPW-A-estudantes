let canvas = document.getElementById('meu-quadro');
let ctx = canvas.getContext('2d');
let x1 = 0;
let y1 = 0;
let x2 = canvas.width-50;
let y2 = 0;
function quadradoPreto50(posicaoX, posicaoY) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(posicaoX, posicaoY, 50, 50);
    ctx.closePath();
}

function quadradoVermelho50(poX, poY) {
    ctx.beginPath();
    ctx.fillStyle = 'red'; 
    ctx.fillRect(poX, poY, 50, 50);
    ctx.closePath();
}

function loop(tempo) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    quadradoPreto50(x1, y1);
    x1++;
    y1++;
    quadradoVermelho50(x2, y2);
    x2--;
    y2++;
    requestAnimationFrame(loop);
}
// function loop(tempo) {
//     ctx.clearRect(0, 00, canvas.width, canvas.height);
//     quadradoVermelho50(x, y);
//     x++;
//     y++;
//     requestAnimationFrame(loop);
// }


requestAnimationFrame(loop);
