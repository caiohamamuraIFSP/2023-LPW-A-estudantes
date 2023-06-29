let ingredientes = [
    ' Velozes e Furiosos 10',
    'A Pequena Sereia',
    'Homem-Aranha: Através do Aranhavers',
    'The Flash',
    ' Missão: Impossível – Acerto de Contas',
    'Oppenheimer',
    'Barbie',
    'Besouro Azul',
    'Os Mercenários 4',
    'As Marvels',
    'Jogos Vorazes: A Cantiga dos Pássaros e Serpentes',
    'Wonka',
    'Aquaman e o Reino Perdido',
];

let elementoOl = document.getElementById('lista-filmes');

let posicao = 0;

for (const item of ingredientes) {
posicao++;
if(posicao % 2 == 1 ){
elementoOl.innerHTML += `<li style = "background:green">${item}</li>`;
} else {
elementoOl.innerHTML += `<li>${item}</li>`;
}

}
