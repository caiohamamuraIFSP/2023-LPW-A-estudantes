let titulos = [
    '1992 Libertadores',
    '1992 Mundial',
    '1993 Libertadores',
    '1993 Mundial',
    '2005 Libertadores',
    '2005 Mundial',
    'O ÚNICO A TER 3 LIBERTADORES E 3 MUNDIAIS',
    
];

let elementoOl = document.getElementById('titulos');

let posicao = 0;

for (const item of titulos) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: grey">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: white">${item}</li>`;
    }
    
}

