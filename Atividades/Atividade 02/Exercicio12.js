/* Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach 
para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    { produto: 'Celular', quantidade: 5, minimo: 10 },
    { produto: 'Notebook', quantidade: 2, minimo: 5 },
    { produto: 'Tablet', quantidade: 7, minimo: 8 },
    { produto: 'Fone de Ouvido', quantidade: 15, minimo: 10 },
    { produto: 'Cabo USB', quantidade: 3, minimo: 5 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2; 
        console.log(`Produto: ${item.produto} - Nova quantidade: ${item.quantidade}`);
    }
});

console.log('Estoque atualizado:', estoque);
