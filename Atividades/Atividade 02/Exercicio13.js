/*Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use 
forEach para calcular o valor total do carrinho. */

const carrinho = {
    itens: [
        { nome: "Produto A", quantidade: 2, precoUnitario: 50 },
        { nome: "Produto B", quantidade: 1, precoUnitario: 30 },
        { nome: "Produto C", quantidade: 3, precoUnitario: 20 },
    ],
    
    calcularTotal: function() {
        let total = 0;
        
        this.itens.forEach(item => {
            total += item.quantidade * item.precoUnitario;
        });
        
        return total;
    }
};

const valorTotal = carrinho.calcularTotal();
console.log(`O valor total do carrinho é: R$ ${valorTotal}`);
