function calcIMC(){
    const Altura = Number(document.querySelector('#altura').value)
    const Peso = Number(document.querySelector('#peso').value)
    const resultado = document.querySelector('#resultado')
    const imc = (Peso / (Altura * Altura)).toFixed(2)
    resultado.innerHTML = `IMC: ${imc}`
}