let titulo = document.getElementById("idTitulo");
titulo.innerHTML = 'OUTER BANKS';

let imagem = document.querySelector("#idImagem");
imagem.innerHTML = '<img src="https://logospng.org/download/netflix/logo-netflix-4096.png">';

let link = document.querySelector(".link");
link.innerHTML = '<button> NETFLIX </button>';
link.href = "https://www.netflix.com/br/";


function botao() {

    let lista = document.querySelector("ul");
    lista.innerHTML = "";
    for (let index = 1; index < 11; index++) {
        lista.innerHTML += `<li>${index}</li>`;

    }
}