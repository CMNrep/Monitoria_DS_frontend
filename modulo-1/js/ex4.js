// Pergunta o valor do salário bruto, onde o replace substitui tudo que não for um número, virgula ou ponto por vazio
let valorPrompt = prompt("Informe o Salário: ").replace(/[^\d,]+/g, '');

// Garante que o valor só tenha uma vírgula como separador decimal
valorPrompt = valorPrompt.replace(/(,.*),/g, '$1');

// Substitui a vírgula por ponto para conversão correta
valorPrompt = valorPrompt.replace(',', '.');

let salBruto = parseFloat(valorPrompt); //converte para float

// Verifica se o valor informado é um número, sendo uma garantia que o valor informado é um número
if (!isNaN(salBruto)) {
    salBruto = salBruto.toFixed(2); // Formata com 2 casas decimais
} else {
    alert("Entrada inválida");
}

function impRenda(salBruto){

    if (salBruto <= 2112.00){
        return 0
    }
    else if (salBruto <= 2826.65){
        return salBruto * 0.075
    }
    else if (salBruto <= 3751.05){
        return salBruto * 0.15
    }
    else if (salBruto <= 4664.68){
        return salBruto * 0.225
    }
    else {  
        return salBruto * 0.275
    }
};

function inss(salBruto){
    if (salBruto <= 1320.00){
        return salBruto * 0.075
    }
    else if (salBruto <= 2571.29){
        return salBruto * 0.09
    }
    else if (salBruto <= 3856.94){
        return salBruto * 0.12
    }
    else {
        return salBruto * 0.14
    }
};

impostoInss = inss(salBruto);
impostoRenda = impRenda(salBruto);
salarioLiquido = salBruto - impostoRenda - impostoInss;

document.write(`</br>
O salario bruto é: ${salBruto}</br>
O valor do IR: ${impostoRenda}</br>
O valor do Inss: ${impostoInss}</br>
Salario Liquido: ${salarioLiquido}</br>`);