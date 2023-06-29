let entrada = document.getElementById('name');
entrada.value = 'Arthur Prates';
let contador = document.querySelector('#title');
contador.style.color='blue';
let lista = document.querySelector('#lista');
lista.style.color = 'blue';
let subtitle = document.querySelector('#subtitle');
subtitle.style.color = 'purple';



function incrementar() {
    for(let ii=1;ii<=10;ii++){
        let listagem = document.getElementById('lista')
        listagem.innerHTML += ii + '<ol></ol>'  ;
        }
}
