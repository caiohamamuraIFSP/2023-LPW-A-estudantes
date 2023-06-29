let materiais = [
    'Caderno ou fichário',
    'Cola líquida ou bastão',
    'Canetas hidrográficas',
    'Lápis preto ou lapiseira',
    'Canetas esferográficas',
    'Caneta marca texto',
    'Lápis de cor',
    'Blocos de anotações'
];

let elementoOl = document.getElementById('mat');
let lugar = 0;

for (const item of materiais) {
    lugar ++;
    if(lugar % 2 == 1 ){
        elementoOl.innerHTML +=  `<li style="background: white">${item}</li>` ;
    } else {
        elementoOl.innerHTML +=  `<li style="background: yellow">${item}</li>` ;
    }
    }
