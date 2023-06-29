let title = document.getElementById("title");
let cont = document.querySelector("#cont");
let text = document.getElementById("text");
let icon = document.getElementById("icon");

title.innerHTML = "Aula 07"
var myList = document.getElementById("myList");
myList.style.border = "10px solid red";
var items = myList.getElementsByTagName("li");
for(let i = 1.0; i<=10; i++) {
    cont.innerHTML += `<li>${i.toFixed(1)}<li>`;
}
//clicar no fundo da pagina
document.addEventListener("click", function() {
    document.body.style.backgroundColor = "#696969";
  });
  title.style.color = "green";



