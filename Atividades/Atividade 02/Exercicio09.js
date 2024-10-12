/*Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.*/

let clientes = [
    { nome: 'João', idade: 28, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 35, cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 40, cidade: 'Curitiba' },
    { nome: 'Ana', idade: 25, cidade: 'Belo Horizonte' },
    { nome: 'Paulo', idade: 32, cidade: 'Porto Alegre' }
];

let clientesMaisDe30 = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        clientesMaisDe30++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${clientesMaisDe30}`);
