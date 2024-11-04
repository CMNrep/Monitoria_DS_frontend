/*************  ✨ Codeium Command ⭐  *************/
/**
 * Calcula o mediano entre 3 n uacute;meros inteiros.
 *
 * @param {string} nu - primeiro n uacute;mero
 * @param {string} n2 - segundo n uacute;mero
 * @param {string} n3 - terceiro n uacute;mero
 *
 * @returns {void}
 */
/******  b605c104-4e73-48d5-89e9-587a39af334d  *******/
let calcularMediano = function () {
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let num3 = parseInt(document.getElementById("n3").value);

    if(num1 > num2 && num1 > num3 && num2 > num3) {
        document.getElementById("resultado").innerHTML = `o mediano entre ${num1}, ${num2} e ${num3} é: ${num2}`;
    }else{
        if(num1 > num2 && num1 > num3 && num2 < num3) {
            document.getElementById("resultado").innerHTML = `o mediano entre ${num1}, ${num2} e ${num3} é: ${num3}`;
        }
    }
}

// 3 - Crie um formulário que permita ao usuário inserir três números inteiros. Em 
// seguida, desenvolva uma função JavaScript que determine e exiba o número do 
// meio  (mediana)  entre  os  três  números  inseridos.  Certifique-se  de  lidar  
// com números iguais corretamente. 