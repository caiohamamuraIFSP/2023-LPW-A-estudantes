function lista(){
    let quantidade = document.querySelector('span')
    quantidade.innerHTML++

    if(quantidade.innerHTML % 2 == 1){
        let lista = document.getElementsByTagName('ul')[0];
        let input = document.querySelector('input')
        let ingredientes = [];
        ingredientes.push(input.value)
        input.value = ''
        lista.innerHTML += `<li>${ingredientes}</li>`
    }else{
        let lista = document.getElementsByTagName('ul')[0];
        let input = document.querySelector('input')
        let ingredientes = [];
        ingredientes.push(input.value)
        input.value = ''
        lista.innerHTML += `<li style="background-color: rgb(133, 226, 161) ">${ingredientes}</li>`

    }
}