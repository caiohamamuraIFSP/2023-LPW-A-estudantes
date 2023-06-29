let botao = document.getElementById('btnTaw');
let listaTaw = document.getElementById('listaTaw');

botao.addEventListener('click', adicionaTaw);

async function adicionaTaw() {
    botao.remove();
    listaTaw.innerHTML = "Carregando...";
    let resposta = await fetch('taw.json');
    let taw = await resposta.json();
    listaTaw.innerHTML = '';
    for (const item of taw) {
        listaTaw.innerHTML += `<li>${item.lista1}</li>`
        listaTaw.innerHTML += `<li>${item.lista2}</li>`
        listaTaw.innerHTML += `<li>${item.lista3}</li>`
        listaTaw.innerHTML += `<li>${item.lista4}</li>`
        listaTaw.innerHTML += `<li>${item.lista5}</li>`
        listaTaw.innerHTML += `<li>${item.lista6}</li>`
        listaTaw.innerHTML += `<li>${item.lista7}</li>`
        listaTaw.innerHTML += `<li>${item.lista8}</li>`
        listaTaw.innerHTML += `<li>${item.lista9}</li>`
    }
}