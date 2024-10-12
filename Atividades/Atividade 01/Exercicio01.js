/*exercicio 01:Escreva um programa que recebe um número inteiro e verifica se ele é par ou
ímpar utilizando uma estrutura de controle if */

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}
let numero = 7;
let resultado = verificarParOuImpar(numero);
console.log(resultado);

