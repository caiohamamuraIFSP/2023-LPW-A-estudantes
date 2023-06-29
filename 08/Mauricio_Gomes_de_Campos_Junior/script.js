let filmes = [
    'Avatar (2009)',
    'Vingadores: Ultimato (2019)',
    'Avatar: O Caminho da Água (2022)',
    'Titanic (1997)',
    'Star Wars: O Despertar da Força (2015)',
    'Vingadores: Guerra Infinita (2018)',
    'Homem-Aranha: Sem Volta Para Casa (2021)',
    'Jurassic World: O Mundo dos Dinossauros (2015)',
    'O Rei Leão (2019)',
    'Os Vingadores (2012)',
];

let lista = document.getElementsByTagName('ul')[0];
let posicao = 0;
for (const item of filmes) {
    posicao++;
    if(posicao % 2 == 1 ){
        lista.innerHTML += `<li style="background-color:darkred;">${item}</li>`;
    } else {
        lista.innerHTML += `<li>${item}</li>`;
    }
}