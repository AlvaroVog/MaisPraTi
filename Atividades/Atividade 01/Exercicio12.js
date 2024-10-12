/*Crie um programa que exibe a tabuada de um número fornecido pelo 
usuário (de 1 a 10) utilizando um loop for. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    rl.close(); 
}

rl.question('Digite um número para ver sua tabuada: ', function(numero) {
 
    const num = parseInt(numero);
    if (!isNaN(num)) {
        exibirTabuada(num); 
    } else {
        console.log("Por favor, digite um número válido.");
        rl.close(); 
    }
});

