let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");

      let logo = document.createElement("img");
      logo.src = "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Gr%C3%A1fico-Joaninha-PNG.png";

      let alturaLogo;
      let larguraLogo;

      function redimensionarImagem() {
        const maxWidth = 70;
        const maxHeight = 70; 

        if (logo.width > maxWidth || logo.height > maxHeight) {
          const ratio = Math.min(maxWidth / logo.width, maxHeight / logo.height);
          larguraLogo = logo.width * ratio;
          alturaLogo = logo.height * ratio;
        } else {
          larguraLogo = logo.width;
          alturaLogo = logo.height;
        }
      }

      logo.onload = function () {
        redimensionarImagem();

        let x = 20;
        let y = 50;
        let velX = 20;
        let velY = 20;

        function loop() {
          x += velX;
          y += velY;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(logo, x, y, larguraLogo, alturaLogo);

          if (y >= canvas.height - alturaLogo || y <= 0) {
            velY *= -1;
          }
          if (x >= canvas.width - larguraLogo || x <= 0) {
            velX *= -2;
          }
          requestAnimationFrame(loop);
        }

        let animationId;

        function startAnimation() {
          animationId = requestAnimationFrame(loop);
        }

        function stopAnimation() {
          cancelAnimationFrame(animationId);
        }

        startAnimation();

        let btnRestart = document.getElementById("btnRestart");
        btnRestart.addEventListener("click", function () {
          stopAnimation();
          x = 20;
          y = 50;
          velX = 3;
          velY = 2;
          startAnimation();
        });
      };

      logo.onerror = function () {
        console.log("Erro ao carregar a imagem.");
      };