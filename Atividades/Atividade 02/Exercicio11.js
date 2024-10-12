/*Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.*/

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
