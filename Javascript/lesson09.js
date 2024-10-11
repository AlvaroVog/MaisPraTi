//1. soma dos elementos de um array 

//let sum = 0
//let arr = [10, 20, 30, 40]

//for (let i = 0; i  < arr.length; i++){
//    console.log (arr[i])
//} 

//for (let i = 0; i < arr.length; i++ ){
//    sum += arr [i]
//}
//console.log (sum)

//Encontre o maior numero em um array

let sum = 0
let arr = [10, 20, 30, 40]

//let max = arr[0]

//for(let j = 0; j < arr.length; j++){
//    if(arr [j] > max){
//        max = arr [j]
//    }
//}
//console.log (max)

//Reverter um array 

//let reversed = []

//for (let k = arr.length - 1; k >= 0; k--){
//    reversed.push (arr[k])
//}

//console.log (reversed)

//Criar um novo array contendo apenas os numeros pares 

//let evens = []

//for (let m = 0; m < arr.length; m++){
//    if (arr[m] % 2 === 0){
//        evens.push (arr[m])
//    }
//}
//console.log (evens)

//Contar ocorrencias de um valor
//let vet = [10, 10, 7, 5, 10]
//let value = 10

//for (let l = 0; 1 < vet.length; l++){
//    if (vet[l] === value){
//        count ++
//    }
//}

//console.log ('o valor $(value) ocorre ${count} vezes no vetor.')

//let matriz = [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9]
//]
//console.table (matriz)
//console.log (matriz[0][2])
//for (let i = 0; i < matriz.length; i++){
//    for (let j = 0; j < matriz [i].length; j++){
//        console.log ('Elemento na posição [${i}][${j}]: ${matriz[i][j]}')
//    }
//}

let arr1 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let resultado = []

if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error ("os arrays devem ter o mesmo tamanho")// lançar um erro no console. 
}

for (let i = 0; i < arr1.length; i++){
    let somaLinha = []
    for (let j = 0; j < arr1[i].length; j++){
        somaLinha.push (arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}

console.table('resultado')