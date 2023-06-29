function incrementar() {
    let contador = document.getElementById('contador');
    contador.innerHTML++;
}
var tituloSecao = document.getElementById("titulo_secao");
console.log(tituloSecao);


var paragrafosDescricao = document.getElementsByClassName("description");
console.log(paragrafosDescricao);


var paragrafosDescricaoB = document.getElementsByClassName("description-b");
console.log(paragrafosDescricaoB);

var paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

var itenslista = document.querySelectorAll("#lista .item")
console.log(itenslista);