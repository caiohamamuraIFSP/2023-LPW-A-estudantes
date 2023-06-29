function clicar(){
    resultado.innerHTML = (nota1.valueAsNumber + nota2.valueAsNumber + nota3.valueAsNumber + nota4.valueAsNumber)/4;

if(resultado.innerHTML>=6) {
    document.getElementById("resultado").innerHTML = "Aeeeeeee passou de ano e sua media foi:" + resultado.innerHTML

}
else{
    document.getElementById("resultado").innerHTML = "Eita parece que falta ainda pontos" + (10-resultado.innerHTML)
}
}