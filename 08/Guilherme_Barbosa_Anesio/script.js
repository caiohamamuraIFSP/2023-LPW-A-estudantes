let pro = [
    'Aspas.',
    'Leaf.',
    'Less.',
    'Sacy.',
    'Tuyz.',
    'Pancada.',
    'Mwzera.',
    'Dgzin.',
    'Ardis.'
];

let lista = document.createElement('ul');

for (let item of pro) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);

const itens = document.querySelectorAll('ul li');

itens.forEach((elemento, indice) => {
  if (indice % 2 !== 1) {
    elemento.style.backgroundColor = '#696969';
  }
});

