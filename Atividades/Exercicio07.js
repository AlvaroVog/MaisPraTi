/*Exercicio 07: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e 
R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que 
leia o número de maçãs compradas, calcule e escreva o valor total da 
compra. */

function calcularValorTotal(quantidadeMacas) {
    let preco;
    
    if (quantidadeMacas < 12) {
        preco = 0.30;
    } else {
        preco = 0.25;
    }
    
    // Calcula o valor total
    let valorTotal = quantidadeMacas * preco;
    return valorTotal;
}

let quantidadeMacas = 15;  
let valorTotal = calcularValorTotal(quantidadeMacas);

console.log("Você comprou " + quantidadeMacas + " maçãs.");
console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));
