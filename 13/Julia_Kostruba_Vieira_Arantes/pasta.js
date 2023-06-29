let botao = document.getElementById('btnJason');
let listaJason = document.getElementById('listaJason');

botao.addEventListener('click', adicionaJason);

async function adicionaJason() {
    botao.remove();
    listaJason.innerHTML = "Carregando...";
    let resposta = await fetch('jason.json');
    let jason = await resposta.json();
    listaJason.innerHTML = '';
    for (const item of jason) {
        listaJason.innerHTML += `<li>${item.lista1}</li>`
        listaJason.innerHTML += `<li>${item.lista2}</li>`
        listaJason.innerHTML += `<li>${item.lista3}</li>`
        listaJason.innerHTML += `<li>${item.lista4}</li>`
        listaJason.innerHTML += `<li>${item.lista5}</li>`
        listaJason.innerHTML += `<li>${item.lista6}</li>`
        listaJason.innerHTML += `<li>${item.lista7}</li>`
        listaJason.innerHTML += `<li>${item.lista8}</li>`
        listaJason.innerHTML += `<li>${item.lista9}</li>`
    }
}