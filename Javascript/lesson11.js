//function teste () {
//    console.log ('Olá')
//}
//teste ()

//function showFunction(successCallback, errorCallback) {
//    if (true){
//        successCallback ("Requisição bem sucedida")
//    } else{
//        errorCallback ("Erro na Requisição")
//    }
//}

//let successCallback = function(message) {
//    console.log (message)
//}

//let errorCallback = function(message) {
//    console.error (message)
//}

//showFunction(successCallback, errorCallback)

//1. Soma dos elementos de um array.

//let arrSum = function (arr){
 //   let sum = 0

//    for (let i = 0; i < arr.length; i++){
//        sum += arr [i]
//    }
//    return sum
//}

//let arr = [10, 20, 30, 40]
//let sum = arrSum (arr)

//console.log (sum) 

//console.log (math.ceil (100.73)) // arredonda para cima 
//console.log (math.floor(100.73))//arredonda para baixo
//console.log (math.round (100.73)) //arredonda de forma 'inteligente' 04 para baixo 05 para cima 

let date = new Date ()

console.log (date.getDate())
console.log (date. getMonth() + 1)
console.log (date.getFullYear())

console.log (date.toString)
date.setDate (date.getDate()+ 720)
date.setFullYear (date.getFullYear() + 720)
console.log (date.toString())