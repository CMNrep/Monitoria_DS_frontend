// Implemente um script JS que irá receber um nome e uma idade e 
// exibirá o nome com o ano de nascimento. 
// Utilize dois prompts para a entrada de dados. 


const nome = prompt("Digite o seu nome: ")
let idade = parseInt(prompt("Digite a sua idade: "))

// variavel recebe uma arrow function que calcula o ano de nascimento
let anoNasc = (idade) => {
    let anoAtual = new Date().getFullYear()
    return anoAtual - idade
}

let Nasc = anoNasc(idade)

document.write(`nome: ${nome}, ano de nasc: ${Nasc}`)