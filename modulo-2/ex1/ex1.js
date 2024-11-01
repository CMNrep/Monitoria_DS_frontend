function calcularMediaESituacao(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let faltas = parseInt(document.getElementById("faltas").value)

    let media = ((nota1 * 4) + (nota2 * 6)) / 10

    let situacao = ""

    if(media >= 6 && faltas <= 16){
        situacao = "Aprovado"
    }
    else{
        situacao = "Reprovado"
    }

    document.getElementById("resultado").innerHTML = situacao
}