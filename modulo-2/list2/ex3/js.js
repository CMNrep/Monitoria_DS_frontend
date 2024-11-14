let calcularMediano = function () {
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let num3 = parseInt(document.getElementById("n3").value);

    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);

    document.getElementById("resultado").innerHTML = `o mediano entre ${num1}, ${num2} e ${num3} é: ${numbers[1]}`;
}