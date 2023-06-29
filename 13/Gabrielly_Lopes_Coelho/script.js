let botao = document.getElementById('btnDescri');
let elementoOl = document.getElementById('ing');

botao.addEventListener('click', adicionaDescri);


async function adicionaDescri() {
    botao.remove();
    ing.innerHTML = "Carregando...";
    let resposta = await fetch('nome.json');
    let nome = await resposta.json();
    ing.innerHTML = '';
    for (const item of nome) {
        ing.innerHTML += `<li>${item.lista1}</li>`
        ing.innerHTML += `<li>${item.lista2}</li>`
        ing.innerHTML += `<li>${item.lista3}</li>`
        ing.innerHTML += `<li>${item.lista4}</li>`
        ing.innerHTML += `<li>${item.lista5}</li>`
        ing.innerHTML += `<li>${item.lista6}</li>`
        ing.innerHTML += `<li>${item.lista7}</li>`
        ing.innerHTML += `<li>${item.lista8}</li>`
        ing.innerHTML += `<li>${item.lista9}</li>`
        ing.innerHTML += `<li>${item.lista10}</li>`
    }
}

