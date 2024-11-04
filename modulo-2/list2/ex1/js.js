function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)

    let imc = peso / (altura * altura)

    document.getElementById('resultado').innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
    return imc
}

let situacao = function (imc) {
    let idade = parseInt(document.getElementById('idade').value)

    if (imc >= 25 && idade < 40)
        document.getElementById("resultado").innerHTML = "sobrepeso"
    else{
        document.getElementById("resultado").innerHTML = "normal"
    }
}