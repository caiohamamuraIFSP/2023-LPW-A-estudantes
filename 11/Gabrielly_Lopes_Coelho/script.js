window.onload = function() {
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 122);
  const vel = 1;

  var vx = vy = 0;
  var px = py = 10;
  var tp = 20;
  var qp = 20;
  var ax = ay = 15;

  var trail = [];
  tail = 4;
  var pontos = 0;

  function game() {
    px += vx;
    py += vy;

    if (px < 0 || px >= qp || py < 0 || py >= qp) {
      morreu();
      return;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax * tp, ay * tp, tp, tp);

    ctx.fillStyle = "green";
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
      if (trail[i].x == px && trail[i].y == py) {
      }
    }

    trail.push({
      x: px,
      y: py
    });
    while (trail.length > tail) {
      trail.shift();
    }
    if (ax == px && ay == py) {
      tail++;
      ax = Math.floor(Math.random() * qp);
      ay = Math.floor(Math.random() * qp);
      pontos++;
      atualizarPontos();
    }
  }

  function keyPush(event) {
    switch (event.keyCode) {
      case 37:
        if (vx !== vel) { 
          vx = -vel;
          vy = 0;
        }
        break;
      case 38:
        if (vy !== vel) {
          vx = 0;
          vy = -vel;
        }
        break;
      case 39:
        if (vx !== -vel) { 
          vx = vel;
          vy = 0;
        }
        break;
      case 40:
        if (vy !== -vel) { 
          vx = 0;
          vy = vel;
        }
        break;
    }
  }

  function morreu() {
    vx = vy = 0;
    tail = 4;
    pontos = 0;
    atualizarPontos();
    px = py = 10;
    trail = [];
  }

  function atualizarPontos() {
    var pontosElemento = document.getElementById('pontos');
    pontosElemento.textContent = pontos;
  }
}
