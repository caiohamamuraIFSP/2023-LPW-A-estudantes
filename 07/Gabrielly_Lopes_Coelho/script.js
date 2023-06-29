let titulo = document.getElementById("idTitulo");
titulo.innerHTML = 'Linguagem de Programação Web';

let imagem = document.querySelector("#idImagem");
imagem.innerHTML = '<img src="https://cpv.ifsp.edu.br/images/Logo_Campus/Marca_IFSP_2015-03.jpg">';

let link = document.querySelector(".link");
link.innerHTML = '<button> IFSP </button>';
link.href = "https://cpv.ifsp.edu.br/";


function botao() {

    let lista = document.querySelector("ul");
    lista.innerHTML = "";
    for (let index = 1; index < 11; index++) {
        lista.innerHTML += `<li>${index}</li>`;
    }
}