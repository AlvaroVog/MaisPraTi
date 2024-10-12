/*Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as 
informações de cada pessoa no console. */

let pessoas = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, cidade: 'Curitiba' }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}

