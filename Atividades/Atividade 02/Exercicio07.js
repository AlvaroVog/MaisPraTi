/*Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço. */

let produtos = [
    { nome: 'Celular', preco: 1200, desconto: 0.1 },
    { nome: 'Notebook', preco: 3000, desconto: 0.1 },
    { nome: 'Tablet', preco: 1500, desconto: 0.1 },
    { nome: 'Fone de Ouvido', preco: 200, desconto: 0.1 }
];

produtos.forEach(produto => {
    let descontoAplicado = produto.preco * produto.desconto; 
    let novoPreco = produto.preco - descontoAplicado; 
    console.log(`Produto: ${produto.nome}, Novo Preço: R$${novoPreco.toFixed(2)}`);
});     

