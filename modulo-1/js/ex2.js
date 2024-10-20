// Implemente  um  script  JS  que  exiba  uma  frase  de  trás  
// para  frente  (inverter  a  ordem  das 
//     palavras, sem inverter as letras). Exemplo: 
//     • Frase: A possibilidade de realizarmos um sonho é o que 
// torna a vida interessante 
// • Frase invertida: interessante vida a torna que o é 
// sonho um realizarmos de possibilidade A 

let frase = prompt("Digite uma frase: ", "A possibilidade de realizarmos um sonho")

// função anonima para inverter a ordem das palavras
let invFrase = function(f) {
    return f.split(" ").reverse().join(" ")
}

document.write(`<h5> a frase é:</h5>
    <p style="color: darkblue;"> ${invFrase(frase)} </p>
`)


    