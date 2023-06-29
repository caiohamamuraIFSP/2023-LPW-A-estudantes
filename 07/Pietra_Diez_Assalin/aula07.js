let title = document.getElementById("title");
let cont = document.querySelector("#cont");
let text = document.getElementById("text");
let icon = document.getElementById("icon");

title.innerHTML = "Aula 07"

for(let i = 1; i<=10; i++) {
    cont.innerHTML += `<li>${i.toFixed(1)}<li>`;
}