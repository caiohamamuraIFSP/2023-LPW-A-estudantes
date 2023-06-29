function calcularIMC() {
    
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
  
    var imc = peso / (altura * altura);
  
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = imc.toFixed(2);
  
    var categoria = "";
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      resultado.classList.add("baixo-peso");
        } else if (imc < 25) {
      categoria = "Peso normal";
      resultado.classList.add("peso-normal");
      } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultado.classList.add("sobrepeso");
      } else {
      categoria = "Obesidade";
      resultado.classList.add("obesidade");
    }
  
    resultado.innerHTML += " (" + categoria + ")";
  }
  