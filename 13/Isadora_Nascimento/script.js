let botao = document.getElementById('btnMateriais');
let listaMateriais = document.getElementById('listaMateriais');

botao.addEventListener('click', adicionaMateriais);

async function adicionaMateriais() {
    botao.remove();
    listaMateriais.innerHTML = "Carregando...";
    let resposta = await fetch('materiais.json');
    let materiais = await resposta.json();
    listaMateriais.innerHTML = '';
    for (const item of materiais) {
        listaMateriais.innerHTML += `<li>${item.material}</li>`
        listaMateriais.innerHTML += `<img src="${item.imagem}">`
    }
}