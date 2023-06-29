let botao = document.getElementById('btnCorinthians');
let listaCorinthians = document.getElementById('listaCorinthians');

botao.addEventListener('click', adicionaCorinthians);

async function adicionaCorinthians() {
    botao.remove();
    listaCorinthians.innerHTML = "Carregando...";
    let resposta = await fetch('Corinthians.json');
    let corinthians = await resposta.json();
    listaCorinthians.innerHTML = '';
    for (const item of corinthians) {
        listaCorinthians.innerHTML += `<li>${item.nome}</li>`
        listaCorinthians.innerHTML += `<img src="${item.imagem}">`
    }
}