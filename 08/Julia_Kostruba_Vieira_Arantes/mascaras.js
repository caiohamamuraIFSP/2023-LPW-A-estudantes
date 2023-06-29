let mensagens = [
    'Agora você é mais sábio e um pouco mais perto de se tornar um velho ranzinza.',
    ' Lembre-se, a idade é apenas um número... um número que começa a doer mais a cada ano.',
    ' Aproveite enquanto ainda consegue apagar todas as velas de uma só vez.',
    'É incrível como você fica mais charmoso(a) a cada ruga que aparece.',
    'Você está oficialmente na idade em que receber meias de presente é considerado emocionante.',
    'Espero que sua festa seja tão divertida que você não se lembre de quantos anos está completando.',
    'Você está envelhecendo como um bom vinho... cada vez mais azedo(a) e deixando todos de ressaca.',
    'Lembre-se de aproveitar cada momento, porque em breve será difícil lembrar qualquer coisa.',
    ' A cada ano que passa, você fica mais jovem... comparado aos dinossauros, é claro!'
];

let elementoOl = document.getElementById('hoje-dia');

let posicao = 0;

for (const item of mensagens) {
    posicao++;
    if(posicao % 2 == 1 ){
        elementoOl.innerHTML += `<li style="background: chocolate">${item}</li>`;
    } else {
        elementoOl.innerHTML += `<li style="background: rgb(207, 193, 61)">${item}</li>`;
    }
    
}