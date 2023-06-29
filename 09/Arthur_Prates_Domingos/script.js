
let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let teste = document.getElementById('teste');
let botao =document.getElementById('botao');
botao.onclick = clicar;
function clicar(){
 location.reload();
}


// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8
start:

mostradorJogador.innerHTML = jogadorAtual;

// Liga todas as células na função jogar
for (const casa of casas) {
  casa.onclick = jogar;
}

function jogar() {  
  // TODO: verificar se o quadro já não está preenchido!

  // Coloca o conteúdo na célula atual
  if(this.innerHTML == ''){
  this.innerHTML = jogadorAtual;

  trocaTurno();
  trocaJogador();
    }
  mostradorJogador.innerHTML = jogadorAtual;
}

function trocaJogador() {
  if (jogadorAtual == 'X') {
    jogadorAtual = 'O';
  } else {
    jogadorAtual = 'X';
  }
}

function trocaTurno() {
  let ganhou = verificaFim();//let ganhou recebe oq retornar de verifica fim pog

  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
    bloqueiaCelulas();
  }
}

function verificaFim() {
    if(
        casas[0].innerHTML !=''&&
        casas[0].innerHTML == casas[1].innerHTML &&
        casas[1].innerHTML == casas[2].innerHTML)
        {
            return true;
    }else if(
        casas[3].innerHTML !=''&&
        casas[3].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[5].innerHTML){
            return true;
    }else if(
        casas[6].innerHTML !=''&&
        casas[6].innerHTML == casas[7].innerHTML &&
        casas[7].innerHTML == casas[8].innerHTML){
            return true;
    }else if(
        casas[0].innerHTML !=''&&
        casas[0].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[8].innerHTML){
            return true;
    }else if(
        casas[2].innerHTML !=''&&
        casas[2].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[6].innerHTML){
            return true;
    }else if(
        casas[1].innerHTML !=''&&
        casas[1].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[7].innerHTML){
             return true;
     }else if(
        casas[0].innerHTML !=''&&
        casas[0].innerHTML == casas[3].innerHTML &&
        casas[3].innerHTML == casas[6].innerHTML){
            return true;
    }else if(
        casas[1].innerHTML !=''&&
        casas[1].innerHTML == casas[4].innerHTML &&
        casas[4].innerHTML == casas[7].innerHTML){
            return true;
    }else if(
        casas[2].innerHTML !=''&&
        casas[2].innerHTML == casas[5].innerHTML &&
        casas[5].innerHTML == casas[8].innerHTML){
            return true;
    }                                     
}

function bloqueiaCelulas() {
  for(casa of casas){
    casa.onclick=false;
  }
 
 }

