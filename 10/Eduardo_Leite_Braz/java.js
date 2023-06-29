window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let ball1 = {
      x: 200,
      y: 200,
      radius: 40,
      dx: 3,
      dy: -2,
      color: 'white'
    };
    
    let ball2 = {
      x: 100,
      y: 100,
      radius: 40,
      dx: -5,
      dy: 1,
      color: 'violet'
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
    
    function detectCollision(ball1, ball2) {
      let dx = ball1.x - ball2.x;
      let dy = ball1.y - ball2.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < ball1.radius + ball2.radius) {
        ball1.dy = -ball2.dx;
        ball1.dx = -ball2.dy;

        ball2.dx = -ball1.dy;
        ball1.dx = -ball2.dy;

        
        
      }
    }
    
    function draw() {
      ctx.clearRect(1, 1, canvas.width, canvas.height);
      
      drawBall(ball1);
      drawBall(ball2);
      
      updateBall(ball1);
      updateBall(ball2);
      
      detectCollision(ball1, ball2);
      
      requestAnimationFrame(draw);
    }
    
    draw();
  });
  