/*
Calcular a média das notas dos alunos de um professor e verificar se ele está a cima da média
de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor . grades.
imprima se o professor está a cima da media de aprovação (Considerando 6.0 como média)
*/

const professor = {
    nome: "Tony Stark", 
    subject: "physics",
    grades:  {
        student1: 10.0,
        student2: 6.0,
        student3: 1.0
    }
}

let sumGrades = 0 
let numberOfStudents = 0

for (let student in professor.grades){
    sumGrades += professor.grades[student]
        numberOfStudents++
}

let average = sumGrades / numberOfStudents

console.log ('A nota média da turma é: ${average.toFixed(2)}')
console.log (average >= 6
    ? '${professor.name} está acima da média'
    : '${professor.name} está abaixo da média.'
)

/* 
Objetivo: Verificar e listar os livros publicados antes de 200.
use o loop for... of para iterar sobre o arry biblioteca
Imprima o titulo e o ano dos livros que atendem essa condição
*/

const library = [
    { title: "O Hobbit", author:"J.R.R. Tolkein", year: 1925 },
    { title: "Harry Potter: Prisioneiro de Askaban", author: "J. K.  Rolling", year: 1999},
    { title: "Nárnia", author: "C. S. Lewis", year: 2010}
]   

for(let book of library) {
    if(book.year < 2000)
        console.table (book)
}

/*
Objetivo: contar a quantidade de filmes por gênero
Use o método forEatch para iterar o array filmes.
para cada filme, verifique se o gênero já existe no meu objeto de contagem  
se existir, incremente a contagem : se não, acione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
    {title: "Tropa de elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
    {title: "interestelar", genre: "sci-fi"},
    {title: "Senhor dos Anéis", genre: "Aventura"},
    {title: "poderoso chefão", genre: "Máfia"},
    {title: "Vingadores: Ultimato", genre: "Heróis"}
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){ // se dentro da contagem de genero, existir aquele genero de filme faço a contagem
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for (let genre in genreCount){
    console.log ('Existem ${genreCount[genre]} filmes no ${genre} do genero ')
}