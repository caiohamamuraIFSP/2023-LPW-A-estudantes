
let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');

// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8

mostradorJogador.innerHTML = jogadorAtual;

// Liga todas as células na função jogar
for (const casa of casas) {
    casa.onclick = jogar;
}

function jogar() {
    if (this.innerHTML == "") {
        // Coloca o conteúdo na célula atual
        this.innerHTML = jogadorAtual;

        trocaTurno();
        trocaJogador();
        mostradorJogador.innerHTML = jogadorAtual;
    }
}


function trocaJogador() {
    if (jogadorAtual === 'X') {
        jogadorAtual = 'O';
    } else {
        jogadorAtual = 'X';
    }
}

function trocaTurno() {
    let empate = verificaEmpate();
    let ganhou = verificaFim();
  
    if (ganhou) {
      cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
      bloqueiaCelulas();
    } else if (empate) {
    cabecalho.innerHTML = 'Empate!';
    bloqueiaCelulas();
    }
  }

function verificaEmpate() {
    for (const casa of casas) {
      if (casa.innerHTML === '') {
        return false;
      }
    }
    return true;
  }

function verificaFim() {
    if (casas[0].innerHTML == casas[1].innerHTML &&
        casas[1].innerHTML == casas[2].innerHTML &&
        casas[0].innerHTML !== "") {
        return true;
    }

    else if (casas[0].innerHTML == casas[3].innerHTML &&
        casas[3].innerHTML == casas[6].innerHTML &&
        casas[0].innerHTML !== "") {
        return true;
    }

    else if (casas[0].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[8].innerHTML &&
        casas[0].innerHTML !== "") {
        return true;
    }

    else if (casas[1].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[7].innerHTML &&
        casas[1].innerHTML !== "") {
        return true;
    }
    else if (casas[2].innerHTML == casas[5].innerHTML &&
        casas[5].innerHTML == casas[8].innerHTML &&
        casas[2].innerHTML !== "") {
        return true;
    }
    else if (casas[2].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[6].innerHTML &&
        casas[2].innerHTML !== "") {
        return true;
    }
    else if (casas[3].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[5].innerHTML &&
        casas[3].innerHTML !== "") {
        return true;
    }
    else if (casas[6].innerHTML == casas[7].innerHTML &&
        casas[7].innerHTML == casas[8].innerHTML &&
        casas[6].innerHTML !== "") {
        return true;
    }

    // TODO: verificar se algum jogador ganhou
    // quando linhas/colunas/diagonais forem todas X ou O
    return false;
}

function bloqueiaCelulas() {
    for (const casa of casas) {
        casa.onclick = 5;
    }
    // TODO: remover eventListeners de todas as células

} 