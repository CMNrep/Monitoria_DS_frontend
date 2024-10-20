// Implemente  um  script  JS  que  exiba  uma  palavra  
// de  trás  para  frente  (letras  invertidas). 
// Exemplo: 
// • Palavra: resultados 
// • Palavra invertida: sodatluser

// ex1

let palav = prompt("Digite uma palavra:", "Digite aqui...")

// função nomeada
function inversor(palavra) {
    return palavra.split("").reverse().join(" ")
}

document.write(inversor(palav))
