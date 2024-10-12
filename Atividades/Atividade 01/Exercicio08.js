/* Exercicio 08:  Escreva um algoritmo para ler 2 valores 
(considere que não serão lidos valores iguais) e escreve-los em 
ordem crescente. */

function ordenarValores(a, b) {
    if (a < b) {
        console.log("Os valores em ordem crescente são: " + a + ", " + b);
    } else {
        console.log("Os valores em ordem crescente são: " + b + ", " + a);
    }
}

let valor1 = 15;  
let valor2 = 8;   

if (valor1 !== valor2) {
    ordenarValores(valor1, valor2);
} else {
    console.log("Os valores fornecidos são iguais. Por favor, insira valores diferentes.");
}
