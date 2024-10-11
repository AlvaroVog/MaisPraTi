/*exercicio 02:Crie um programa que classifica a idade de uma pessoa em categorias 
(criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma 
estrutura de controle if-else. */

function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Você é uma criança.";
    } else if (idade >= 13 && idade <= 17) {
        return "Você é um adolescente.";
    } else if (idade >= 18 && idade <= 64) {
        return "Você é um adulto.";
    } else if (idade >= 65) {
        return "Você é um idoso.";
    } else {
        return "Idade inválida.";
    }
}
let idade = 25;
let resultado = classificarIdade(idade);
console.log(resultado);
