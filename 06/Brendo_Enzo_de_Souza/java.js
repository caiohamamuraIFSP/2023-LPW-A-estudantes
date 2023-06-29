function calcula(e) {
    e.preventDefault();
    if(media.innerHTML >= 6) {
        document.getElementById("media").innerHTML = "Parabéns! Sua nota foi de " +media.innerHTML;
        media.style.color='green';
    }
    else{
        document.getElementById("media").innerHTML = "Se lascou! Ainda falta "+(6-media.innerHTML);
        media.style.color = 'red';
    }
}