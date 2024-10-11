/*Exercicio 06:Ler três valores para os lados de um triângulo: A, B e C. Verificar se 
os lados fornecidos formam realmente um triângulo. Caso forme, deve ser 
indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. */

function ehTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function classificarTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Triângulo equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo isósceles";
    } else {
        return "Triângulo escaleno";
    }
}

let A = 5; 
let B = 5;
let C = 5;

if (ehTriangulo(A, B, C)) {
    console.log("Os valores fornecidos formam um triângulo.");
    console.log(classificarTriangulo(A, B, C));
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
