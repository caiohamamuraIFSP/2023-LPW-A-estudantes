let bolaAzul = document.getElementById('bola-azul');
let pontuacaoEl = document.getElementById('pontuacao');
let pontuacao = 0;

bolaAzul.onmouseenter = sorteiaPosicao;

let largura = innerWidth;
let altura = innerHeight;

function sorteiaPosicao() {
    let x = Math.random() * (largura - 2 * 25) + 10;
    let y = Math.random() * (altura - 2 * 25) + 10;

    bolaAzul.style.left = x + 'px';
    bolaAzul.style.top = y + 'px';

    pontuacao++;
    pontuacaoEl.innerHTML = pontuacao;
}


// setInterval(sorteiaPosicao, 300)