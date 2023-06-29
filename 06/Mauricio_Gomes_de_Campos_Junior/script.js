function calcula() {
    media.innerHTML = (nota1.valueAsNumber + nota2.valueAsNumber + nota3.valueAsNumber + nota4.valueAsNumber)/4;
    if(media.innerHTML >= 6){
        document.getElementById("media").innerHTML = "Parabéns! Sua nota foi de "+media.innerHTML;
        media.style.color = 'green';
    }
    else{
        document.getElementById("media").innerHTML = "Se lascou! Ainda falta "+(10-media.innerHTML);
        media.style.color = 'red';
    }
}