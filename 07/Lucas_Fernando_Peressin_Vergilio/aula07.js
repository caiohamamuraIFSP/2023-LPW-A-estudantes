let title = document.getElementById("title");
let cont = document.querySelector("#cont");
let text = document.getElementById("text");

title.innerHTML = "Aula 07"

for(let i = 1; i<=20; i++) {
    cont.innerHTML += `<li>${i.toFixed(1)}<li>`;
}