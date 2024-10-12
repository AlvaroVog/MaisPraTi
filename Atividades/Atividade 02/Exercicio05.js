/*Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.*/

let alunos = [
    { nome: 'Lucas', nota1: 8, nota2: 7 },
    { nome: 'Carla', nota1: 6, nota2: 5 },
    { nome: 'Marcos', nota1: 9, nota2: 8 },
    { nome: 'Fernanda', nota1: 7, nota2: 7 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}
