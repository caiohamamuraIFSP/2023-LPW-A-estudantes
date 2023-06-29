let ingredientes = [
    '250g de farinha de trigo',
    '50g de manteiga',
    '75g de gordura vegetal',
    '1 gema',
    'Pimenta a gosto',
    '75ml dde água gelada',
    '1 pitada de sal',
    '500g frango desfiado defumado',
    'Salsinha a gosto'
];

let elementoOl = document.getElementById('listaingredientes');

let posicao = 0;

for (const item of ingredientes) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: darkseagreen">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: salmon">${item}</li>`;
    }
    
}