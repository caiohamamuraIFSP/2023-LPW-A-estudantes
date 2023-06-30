let botao = document.getElementById('btnGames');
let listaGames = document.getElementById('ListaGames');

botao.addEventListener('click', adicionaGames);

async function adicionaGames() {
    botao.remove();
    listaGames.innerHTML = "Carregando...";
    let resposta = await fetch('games.json');
    let games = await resposta.json();
    listaGames.innerHTML = '';
    for (const item of games) {
        listaGames.innerHTML += `<li>${item.game}</li>`
        listaGames.innerHTML += `<img src = "${item.Imagem}">`
        listaGames.innerHTML += `<div> Prêmios: ${item.Prêmios}</div>`
        listaGames.innerHTML += `<div> Ano de Lançamento:${item.ano}</div>`

    }
}