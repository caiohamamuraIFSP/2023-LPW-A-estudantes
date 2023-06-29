let ingredientes = [
    '500 g de peito de frango',
    '4 colheres (sopa) de óleo',
    '1 cebola picada',
    '1 xícara (chá) de ervilhas',
    'pimenta-do-reino a gosto',
    '1/2 litro de caldo de galinha',
    '1 dente de alho amassado',
    '3 tomates sem pele e sem sementes',
    'sal a gosto'
];

let elementoOl = document.getElementById('lista-ingredientes');

let posicao = 0;

for (const item of ingredientes) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: hotpink">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: white">${item}</li>`;
    }
    
}

