let jogos = [
    'tetris(520 milhões)',
    'miecraft(238 milhões)',
    'gta V:(170 milhões)',
    'wii sports: (82,88 milhões)',
    'PUBG(75 milhões)',
    'Mario kart 8 (56,87 milhões)',
    'overwatch (50 milhões)',
    'Super mario bros (48 milhões)',
    'Pokémon(47,52 milhões)',
    'Red dead redemption 2 (46 milhões)',
];

let lista = document.getElementsByTagName('ul')[0];
let posicao = 0;
for (const item of jogos) {
    posicao++;
    if(posicao % 2 == 1 ){
        lista.innerHTML += `<li style="background-color:darkblue;">${item}</li>`;
    } else {
        lista.innerHTML += `<li>${item}</li>`;
    }
}