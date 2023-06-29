
let Caracteristicas = [
    'Surgem nessa época as gárgulas, que ficavam nas fachadas das igrejas.',
    'As esculturas tinham como principal função o escoamento da água, mas foi muito utilizado na decoração',
    'O vitral é uma das principais formas de arte gótica.',
    'O estilo neogótico ou revivalismo gótico é um movimento da arquitetura revivalista.',
    'A arte neogótica chegou ao Brasil por volta de 1880, ainda no reinado de D. Pedro II',
    'Os vitrais eram produzidos em pequenas partes e unidos depois por grandes, que eram anexadas nas aberturas das construções.',
    ' As pinturas ganham novas características, passam a ser mais naturais e são incluídas retratos mais profanas, como corpos humanos, e imagens de Jesus e Maria mais naturais, mais próximas da humanidade.',
    'Os afrescos das igrejas, ou seja, os tetos e as paredes começam a receber pinturas.',
    'É possível encontrar brasões e outros símbolos, além de rosáceas, círculos decorativos, cujo formato lembra uma rosa, e casas'
];

let elementoOl = document.getElementById('caracteristicas');

let posicao = 0;

for (const item of Caracteristicas) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: cornflowerblue">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: white">${item}</li>`;
    }
    
}