function clicar(){
    resultado.innerHTML = (nota1.valueAsNumber + nota2.valueAsNumber + nota3.valueAsNumber + nota4.valueAsNumber)/4;

if(resultado.innerHTML>=6) {
    document.getElementById("resultado").innerHTML = "Não sei nem como vc passou de ano:" + resultado.innerHTML

}
else{
    document.getElementById("resultado").innerHTML = "kakaakka Vai repeti alá kaaaaakk" + (10-resultado.innerHTML)
}
}