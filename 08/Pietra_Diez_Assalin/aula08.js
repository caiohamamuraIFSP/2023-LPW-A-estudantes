let atividade = [
    'Mundial de Clubes (2000).',
    'Copa Libertadores da América (2012).',
    'Mundial de Clubes (2012).',
    'Recopa Sul-Americana (2013).',
    'Campeonato Brasileiro (1990) .',
    'Bicampeonato Brasileiro (1998)',
    'Tricampeonato Brasileiro (1999).',
    'Tetracampeonato Brasileiro (2005).',
    'Copa do Brasil (2009).'

];

let lista = document.createElement('ol');

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
