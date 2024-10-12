/*Exercicio 03:Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */


function classificarNota(nota) {
    if (nota >= 7 && nota <= 10) {
        return "Aprovado";
    } else if (nota >= 5 && nota < 7) {
        return "Recuperação";
    } else if (nota >= 0 && nota < 5) {
        return "Reprovado";
    } else {
        return "Nota inválida. Por favor, insira um valor entre 0 e 10.";
    }
}
let nota = 6.5;
let resultado = classificarNota(nota);
console.log(resultado);
