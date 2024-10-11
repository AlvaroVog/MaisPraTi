/*Exercicio 14: Crie um programa que calcula o fatorial de um número 
fornecido pelo usuário utilizando um loop for ou while. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularFatorial(numero) {
    let fatorial = 1; 
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; 
    }
    return fatorial; 
}

rl.question('Digite um número inteiro não negativo para calcular o fatorial: ', function(input) {
    const numero = parseInt(input); 

    if (!isNaN(numero) && numero >= 0) {
        const resultado = calcularFatorial(numero); // Chama a função para calcular o fatorial
        console.log(`O fatorial de ${numero} é: ${resultado}`);
    } else {
        console.log("Por favor, digite um número inteiro não negativo.");
    }
    
    rl.close(); 
});

