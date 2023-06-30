let botao = document.getElementById('btnFilmes');
let listaFilmes = document.getElementById('listaFilmes');

botao.addEventListener('click', adicionaFilmes);

async function adicionaFilmes() {
    botao.style.display = 'none';
    listaFilmes.innerHTML = "Carregando...";
    let resposta = await fetch('movies.json');
    let filmes = await resposta.json();
    listaFilmes.innerHTML = '';
    for (const item of filmes) {
        listaFilmes.innerHTML += `<ol>${item.nome}</ol>`
        listaFilmes.innerHTML += `<img src="${item.imagem}">`
    }
}
