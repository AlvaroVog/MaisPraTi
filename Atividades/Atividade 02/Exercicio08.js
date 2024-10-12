/*Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array 
contendo apenas os títulos dos filmes.*/

let filmes = [
    { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 },
    { titulo: 'Interestelar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Clube da Luta', diretor: 'David Fincher', anoLancamento: 1999 },
    { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994 }
];

let titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);

