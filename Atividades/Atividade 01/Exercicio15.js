/*Exercicio 15:Escreva um programa que gera e imprime os primeiros 10 números da 
sequência de Fibonacci utilizando um loop for.*/

function fibonacci() {
    const quantidade = 10; 
    let fib = [0, 1]; 

    for (let i = 2; i < quantidade; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }

    console.log("Os primeiros 10 números da sequência de Fibonacci são:");
    console.log(fib.join(", "));
}

fibonacci();
