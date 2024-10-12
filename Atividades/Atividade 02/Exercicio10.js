/*Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos. */

let vendas = [
    { produto: 'Celular', quantidade: 2, valor: 1500 },
    { produto: 'Notebook', quantidade: 1, valor: 3000 },
    { produto: 'Tablet', quantidade: 3, valor: 1200 },
    { produto: 'Fone de Ouvido', quantidade: 4, valor: 200 }
];

let valorTotalVendas = 0;

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor; 
});

console.log(`Valor total das vendas: R$${valorTotalVendas}`);
