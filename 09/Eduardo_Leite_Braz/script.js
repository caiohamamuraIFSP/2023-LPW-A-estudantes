 let cabecalho = document.getElementById('cabecalho');
 let mostradorJogador = document.getElementById('jogador');
 let jogadorAtual = 'X';
 let casas = document.getElementsByTagName('td');

// // Grid de casas
// // 0 1 2
// // 3 4 5
// // 6 7 8

 mostradorJogador.innerHTML = jogadorAtual;

// // Liga todas as células na função jogar
 for (const casa of casas) {
 casa.onclick = jogar;
 }

 function jogar() {  
//   // TODO: verificar se o quadro já não está preenchido!

//   // Coloca o conteúdo na célula atual
 this.innerHTML = jogadorAtual;

trocaTurno();
trocaJogador(); 
mostradorJogador.innerHTML = jogadorAtual;
 }

function trocaJogador() {
if (jogadorAtual === '^-^') {
jogadorAtual = '°-°';
 } else {
jogadorAtual = '^-^';
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
//   // TODO: verificar se algum jogador ganhou
//   // quando linhas/colunas/diagonais forem todas X ou O
return false;
}
 function bloqueiaCelulas() {
//   TODO: remover eventListeners de todas as células
  
} 