document.addEventListener("DOMContentLoaded", function() {
    const personagem = document.getElementById("personagem");
    const obstaculos = document.getElementsByClassName("obstaculo");
    const jogo = document.getElementById("jogo");
  
    let jogoFinalizado = false;
  
    function verificarColisao(element1, element2) {
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();
  
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    }
  
    function verificarFinal() {
      const jogoRect = jogo.getBoundingClientRect();
      const personagemRect = personagem.getBoundingClientRect();
  
      if (personagemRect.right >= jogoRect.right) {
        jogoFinalizado = true;
        alert("Parabéns! Você chegou ao final do jogo!");
      }
    }
  
    document.addEventListener("keydown", function(event) {
      if (!jogoFinalizado) {
        const velocidade = 10;
  
        switch (event.key) {
          case "ArrowUp":
            personagem.style.top = personagem.offsetTop - velocidade + "px";
            break;
          case "ArrowDown":
            personagem.style.top = personagem.offsetTop + velocidade + "px";
            break;
          case "ArrowLeft":
            personagem.style.left = personagem.offsetLeft - velocidade + "px";
            break;
          case "ArrowRight":
            personagem.style.left = personagem.offsetLeft + velocidade + "px";
            break;
        }
  
        for (let i = 0; i < obstaculos.length; i++) {
          if (verificarColisao(personagem, obstaculos[i])) {
            jogoFinalizado = true;
            alert("Você perdeu! Tente novamente.");
            break;
          }
        }
  
        verificarFinal();
      }
    });
  
    document.addEventListener("mousemove", function(event) {
      if (!jogoFinalizado) {
        const jogoRect = jogo.getBoundingClientRect();
        const limiteSuperior = jogoRect.top;
        const limiteInferior = jogoRect.bottom - personagem.offsetHeight;
  
        const posicaoY = event.clientY - jogoRect.top;
  
        if (posicaoY >= limiteSuperior && posicaoY <= limiteInferior) {
          personagem.style.top = posicaoY + "px";
        }
  
        for (let i = 0; i < obstaculos.length; i++) {
          if (verificarColisao(personagem, obstaculos[i])) {
            jogoFinalizado = true;
            alert("Você perdeu! Tente novamente.");
            break;
          }
        }
  
        verificarFinal();
      }
    });
  
    document.addEventListener("touchmove", function(event) {
      event.preventDefault();
  
      if (!jogoFinalizado) {
        const jogoRect = jogo.getBoundingClientRect();
        const limiteSuperior = jogoRect.top;
        const limiteInferior = jogoRect.bottom - personagem.offsetHeight;
  
        const posicaoY = event.touches[0].clientY - jogoRect.top;
  
        if (posicaoY >= limiteSuperior && posicaoY <= limiteInferior) {
          personagem.style.top = posicaoY + "px";
        }
  
        for (let i = 0; i < obstaculos.length; i++) {
          if (verificarColisao(personagem, obstaculos[i])) {
            jogoFinalizado = true;
            alert("Você perdeu! Tente novamente.");
            break;
          }
        }
  
        verificarFinal();
      }
    });
  });