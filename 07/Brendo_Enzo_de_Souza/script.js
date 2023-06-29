function processo() {
    let imagem = document.querySelector('img')
    let input = document.getElementById('t1')
    for(let contador = 0; contador<=10; contador++){
        let conteudo = document.querySelector('div')
        conteudo.innerHTML += '<li>' + contador + '</li>'
    }
    imagem.src = input.value
    input.value = ''
}