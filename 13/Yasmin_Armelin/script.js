let botao = document.getElementById('btnCaract');
let listaCaract = document.getElementById('listaCaract');

botao.addEventListener('click', adicionaCaract);

async function adicionaCaract() {
    botao.remove();
    listaCaract.innerHTML = "Carregando...";
    let resposta = await fetch('caract.json');
    let caract = await resposta.json();
    listaCaract.innerHTML = '';
    for (const item of caract) {
        listaCaract.innerHTML += `<li>${item.lista1}</li>`
        listaCaract.innerHTML += `<li>${item.lista2}</li>`
        listaCaract.innerHTML += `<li>${item.lista3}</li>`
        listaCaract.innerHTML += `<li>${item.lista4}</li>`
        listaCaract.innerHTML += `<li>${item.lista5}</li>`
        listaCaract.innerHTML += `<li>${item.lista6}</li>`
        listaCaract.innerHTML += `<li>${item.lista7}</li>`
        listaCaract.innerHTML += `<li>${item.lista8}</li>`
        listaCaract.innerHTML += `<li>${item.lista9}</li>`
        listaCaract.innerHTML += `<img src="${item.imagem}">`
    }
}