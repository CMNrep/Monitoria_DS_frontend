let ordenarNumero = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let numerosOrdenados = [num1, num2, num3]

    numerosOrdenados.sort(function(a, b) {
        return a - b;
    });

    document.getElementById("resultado").innerHTML = `Os números em ordem crescente são: ${numerosOrdenados}`
}