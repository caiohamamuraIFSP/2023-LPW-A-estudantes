function ala(){
    let gugu = document.getElementById('curry')
    let img = document.querySelector('img')
    img.src = gugu.value
    for(cont = 0;  cont <= 10; cont++){
        let bre = document.querySelector('div')
        bre.innerHTML += '<li>' + cont + '</li>'

    }

}
