/*Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as 
propriedades. */

let produto = {
    nome: 'Notebook',
    preco: 3500,
    estoque: 50,
    garantia: 12,
    desconto: 5
};

function filtrarPropriedadesPorValor(objeto, valorMinimo) {
    let resultado = {};

    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorMinimo) {
            resultado[propriedade] = objeto[propriedade];
        }
    }

    return resultado;
}

let propriedadesFiltradas = filtrarPropriedadesPorValor(produto, 10);
console.log(propriedadesFiltradas);

