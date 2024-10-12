/*Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa 
propriedade ao objeto. */

let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};

let existeEditora = false;

for (let propriedade in livro) {
    if (propriedade === 'editora') {
        existeEditora = true;
        break;
    }
}

if (!existeEditora) {
    livro.editora = 'HarperCollins';
}

console.log(livro);

