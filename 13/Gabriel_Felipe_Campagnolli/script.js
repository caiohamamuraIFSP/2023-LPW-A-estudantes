let botao = document.getElementById('butao');
let lista = document.getElementById('listaJogos');

botao.addEventListener('click', adicionaAnimes);

async function adicionaAnimes() {
    botao.remove();
    lista.innerHTML = "Carregando...";
    let resposta = await fetch('Jogos.json');
    let games = await resposta.json();
    lista.innerHTML = '';
    lista.innerHTML +=`<h1>Melhores Jogos ps1 e ps2</h1>`
    for (const item of games) {
        lista.innerHTML += `<li><h3>${item.jogo}</h3></li> `
        lista.innerHTML += `<div><img src="${item.imagem}">Lançamento:${item.ano}<br> Plataformas:${item.Plataformas}</div`
    }
}