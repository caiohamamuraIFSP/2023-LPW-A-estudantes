    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const objeto = {
      x: 50,
      y: 50,
      raio: 20,
      cor: "blue",
      velocidadeX: 2,
      velocidadeY: 1.5
    };

    function desenharObjeto() {
      ctx.beginPath();
      ctx.arc(objeto.x, objeto.y, objeto.raio, 0, Math.PI * 2);
      ctx.fillStyle = objeto.cor;
      ctx.fill();
      ctx.closePath();
    }

    function atualizar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      objeto.x += objeto.velocidadeX;
      objeto.y += objeto.velocidadeY;

      if (objeto.x + objeto.raio > canvas.width || objeto.x - objeto.raio < 0) {
        objeto.velocidadeX = -objeto.velocidadeX;
      }
      if (objeto.y + objeto.raio > canvas.height || objeto.y - objeto.raio < 0) {
        objeto.velocidadeY = -objeto.velocidadeY;
      }

      desenharObjeto();

      requestAnimationFrame(atualizar);
    }

    atualizar();
