window.onload = function() {
    let items = ["jogo 1", "jogo 2", "jogo 3", "jogo 4", "jogo 5", "jogo 6", "jogo 7"];
    let ul = document.getElementById("lista");
    for(let k=0; k<items.length; k++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items[k]));
        ul.appendChild(li);
    }
    let oddItems = document.querySelectorAll("li:nth-child(odd)");
    for(let k=0; k<oddItems.length; k++) {
        oddItems[k].style.backgroundColor = "#ef2c16";
    }
}