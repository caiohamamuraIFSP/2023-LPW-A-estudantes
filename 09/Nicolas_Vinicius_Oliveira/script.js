let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let contVelha;
let jogadas= 0;

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
  // TODO: verificar se o quadro já não está preenchido!
  // Coloca o conteúdo na célula atual
  jogadas++
  if (this.innerHTML == '') {
    this.innerHTML = jogadorAtual;
    trocaTurno();
    trocaJogador();
    mostradorJogador.innerHTML = jogadorAtual;
  }
  if(jogadas === casas.length && !verificaFim()){
    cabecalho.innerHTML = `Empate`;
    bloqueiaCelulas();
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
  let ganhou = verificaFim();

  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
    bloqueiaCelulas();
  }
}

function verificaFim() {
   
  let verifica = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  for (const caso of verifica) {
    if (casas[caso[0]].innerHTML == casas[caso[1]].innerHTML &&
      casas[caso[0]].innerHTML == casas[caso[2]].innerHTML &&
      casas[caso[0]].innerHTML != '')
      return true
  }

  // TODO: verificar se algum jogador ganhou
  // quando linhas/colunas/diagonais forem todas X ou O
  return false;
}

function bloqueiaCelulas() {
  for (const casa of casas) {
    casa.onclick = false;
    // TODO: remover eventListeners de todas as células

  }
}
