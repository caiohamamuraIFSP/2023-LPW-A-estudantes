let canvas = document.getElementById('bolinea');
let ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height = window.innerHeight;
let x = 0;
let y = 0;
let angulo =0;
let radius = 50;

function bola(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI );
    ctx.closePath();
    ctx.fillStyle = 'blue'
    ctx.fill();
}

function loop(tempo) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bola(x , y);
    x++;
    y++;
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
function girar() {
    angulo += 1;
    bolinea.style.transform = 'rotatey(' + angulo + 'deg)';
    requestAnimationFrame(girar);
  }
  
  girar();

  
  //PS: precisei do gpt pra fazer essa rodadinha , sou falhou :( (emoji triste))
  //não era bem o que eu queria fazer, mas tive uma crise de riso quando isso aconteceu ent vai ser :D