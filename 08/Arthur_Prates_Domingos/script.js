let games = [
    'The Last of Us II',
    'Batman Arkham Knight',
    'Assassins Creed Rogue',
    'Resident Evil 4',
    'Gta San Andreas'
]

let lista = document.getElementsByTagName('ol')[0];
for (let item of games){
    lista.innerHTML+=  `<li>${item}</li>`

}
const itemsImpares = document.querySelectorAll('li:nth-child(odd)');
for (item of itemsImpares) {
    item.style.backgroundColor = 'gray';
}