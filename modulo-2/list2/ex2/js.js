let calcularSalario = () => {
    let horas = document.getElementById("HorasTrabalhadas").value
    let vlHora = document.getElementById("VlPorHora").value

    document.getElementById("resultado").innerHTML = `Seu salario é: ${(horas * vlHora).toFixed(2)}`
}    