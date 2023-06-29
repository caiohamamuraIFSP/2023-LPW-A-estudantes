let jogadores = [
    'Joel Embiid',
    'Nikola Jokic',
    'Nikola Jokic',
    'Giannis Antetokounmpo',
    'Giannis Antetokounmpo',
    'James Harden',
    'Russell Westbrook',
    'Stephen Curry',
    'Russell Westbrook',
    'James Harden',
    'LeBron James',
    'LeBron James',
];

let elementoOl = document.getElementById('lista-jogadores');

let posicao = 0;

for (const item of jogadores) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: brown">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: white">${item}</li>`;
    }
    
}

