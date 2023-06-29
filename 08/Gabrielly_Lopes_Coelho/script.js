let Filmes = [
    'Uma Noite no Museu: O Retorno de Kahmunrah',
    'Pantera Negra: Wakanda para Sempre',
    'Lightyear',
    'Thor: Ragnarok',
    'A Era do Gelo: As Aventuras de Buck Wild',
    'Guardiões da Galáxia',
    'Encanto',
    'Vingadores: Ultimato',
    'Moana'
];

let elementoOl = document.getElementById('ing');
let lugar = 0;

let imagem = document.querySelector("#idImagem");
imagem.innerHTML = '<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1430A47DDD532CE6292009B3CF2080145C771904DF2F472021F2EC6075D0761C/scale?width=1200&aspectRatio=1.78&format=jpeg">';

let link = document.querySelector(".link");
link.innerHTML = '<button> Disney </button>';
link.href = "https://www.disney.com.br/";


for (const item of Filmes) {
    lugar ++;
    if(lugar % 2 == 1 ){
        elementoOl.innerHTML +=  `<li style="background: skyblue">${item}</li>` ;
    } else {
        elementoOl.innerHTML +=  `<li style="background: blue">${item}</li>` ;
    }
    }
