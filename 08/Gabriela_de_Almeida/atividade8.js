let atividade = [
    'Guardiões das Galáxia 3.',
    'Velozes e Furiosos 10.',
    'A pequena Sereia: Live action.',
    'Homem Aranha através do Aranhaverso.',
    'Shazam:Fúria dos Deuses.',
    'Transformer : O despertar da Fera.',
    'Wonka.',
    'Barbie.',
    'The Marvels.',
    ' Wish.',
];

let lista = document.createElement('ul');

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let filmes = document.getElementById('filmes');
filmes.append(lista);