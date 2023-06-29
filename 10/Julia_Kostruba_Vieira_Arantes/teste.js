var heart = {
    x: 0,
    y: 0,
    size: 50,
    dx: 1,
    dy: 6,
    color: 'chocolate'
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//profs pesquisei essa parte de como faz o coração na internet, não teve jeito :3
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = heart.color;
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y + heart.size / 4);
    ctx.bezierCurveTo(heart.x, heart.y, heart.x - heart.size / 2, heart.y, heart.x - heart.size / 2, heart.y + heart.size / 4);
    ctx.bezierCurveTo(heart.x - heart.size / 2, heart.y + heart.size / 2, heart.x, heart.y + heart.size, heart.x, heart.y + heart.size);
    ctx.bezierCurveTo(heart.x, heart.y + heart.size, heart.x + heart.size / 2, heart.y + heart.size / 2, heart.x + heart.size / 2, heart.y + heart.size / 4);
    ctx.bezierCurveTo(heart.x + heart.size / 2, heart.y, heart.x, heart.y, heart.x, heart.y + heart.size / 4);
    ctx.closePath();
    ctx.fill();

    heart.x += heart.dx;
    heart.y += heart.dy;

    if (heart.x + heart.size > canvas.width || heart.x < 0) {
        heart.dx *= -1;
    }
    if (heart.y + heart.size > canvas.height || heart.y < 0) {
        heart.dy *= -1;
    }

    requestAnimationFrame(animate);
}
animate();