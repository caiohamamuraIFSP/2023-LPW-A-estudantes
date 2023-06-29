let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let bolaAzul = {
    x: 200,
    y: 200,
    radius: 40,
    dx: 3,
    dy: -2,
    color: 'white'
};
    
function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}
    
function updateBall(ball) {
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}
    
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(bolaAzul);
    updateBall(bolaAzul);
    requestAnimationFrame(draw);
}
    
draw();