let botao = document.getElementById('btnPros');
let listaPros = document.getElementById('listaPros');

botao.addEventListener('click', adicionaPros);

async function adicionaPros() {
    botao.remove();
    listaPros.innerHTML = "Carregando...";
    let resposta = await fetch('pros.json');
    let pros = await resposta.json();
    listaPros.innerHTML = '';
    for (const item of pros) {
        listaPros.innerHTML += `<li>${item.nome}</li>`
        listaPros.innerHTML += `<img src="${item.imagem}">`
    }
}


