/*Exercicio 11: Escreva um programa que solicita ao usuário 5 números e 
calcula a soma total utilizando um loop for. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;
let numeros = [];

function solicitarNumero() {
    if (contador < 5) {
        rl.question(`Digite o número ${contador + 1}: `, function(numero) {
            numeros.push(parseFloat(numero)); 
            soma += parseFloat(numero); 
            contador++;
            solicitarNumero(); 
        });
    } else {
        console.log("Os números digitados foram: " + numeros.join(", "));
        console.log("A soma total dos números é: " + soma.toFixed(2));
        rl.close(); 
    }
}

solicitarNumero();
