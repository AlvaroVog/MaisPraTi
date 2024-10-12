/*Exercicio 13: Fazer um algoritmo para receber números decimais 
até que o usuário digite 0 e fazer a média aritmética desses números. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;         
let contador = 0;      


function solicitarNumero() {
    rl.question('Digite um número decimal (ou 0 para sair): ', function(input) {
        const numero = parseFloat(input); 

        if (numero === 0) {
            if (contador === 0) {
                console.log("Nenhum número foi inserido.");
            } else {
                const media = soma / contador; 
                console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
            }
            rl.close(); 
        } else if (!isNaN(numero)) {
            soma += numero; 
            contador++; 
            solicitarNumero(); 
        } else {
            console.log("Por favor, digite um número válido.");
            solicitarNumero(); 
        }
    });
}

solicitarNumero();
