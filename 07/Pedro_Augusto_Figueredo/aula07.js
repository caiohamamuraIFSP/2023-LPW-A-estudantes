let title = document.getElementById("titulo");
let cont = document.querySelector("#cont");
let text = document.getElementById("text");

title.innerHTML = "Pedro Figueredo"

for(let i = 1; i<=10; i++) {
    cont.innerHTML += `<li>${i.toFixed(0)}<li>`;
}