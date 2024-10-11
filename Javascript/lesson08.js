const prompt = require('prompt-sync')()

//const num1 = Number (prompt('Digite um número: '));
//if (num1 > 0){
 //   console.log ('O número informado é positivo!')
//} else if (num1 < 0){
//    console.log ('O número informado é negativo!')
//} else {
 //   console.log ('O número é zerp. ')
//}

///Exercicio 02 
//const year = Number (prompt ('informe um ano: '))
//if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//    console.log ('O ano $(year) é bissexto')
//}else{
//    console.log ('$(year) não é um ano bissexto')
//}

//let grade1 = Number(prompt ('Informe a primeira nota: '))
//let grade2 = Number(prompt ('Informe a segunda nota: '))
//let grade3 = Number(prompt ('Informe a terceira nota: '))

//let avg = (grade1 + grade2 + grade3) /3
//let concept

//if (avg >= 90){
//    console.log ('A média das notas é: ${avg.toFixed(2)}')
//    concept = 'A'
//} else if (avg <=80) {
 //   console.log ('A média da nota é: ${avg.toFixed(2)}')
 //   concept = 'B'
//} else {
//    console.log ('É outra nota')
//}

//console.log ('O conceito do aluno é: ' + concept)

//Exercicio 09

//let age = Number(prompt('informe a sua idade: '))
//let ageRange
//if(age >= 0 && age <= 12){
//    ageRange = 'criança'
//} else if (age >= 13 && age <= 17){
//    ageRange = 'adolescente'
//} else if (age >= 18 && age <=60){
//    ageRange = 'Adulto'
//} else{
//    ageRange = 'idade inválida'
//}

//switch(ageRange) {
//    case 'criança':
 //       console.log ("Você é uma criança!")
//    case 'adolescente':
//        console.log ("Você é um(a) adolescente!")
//    case 'Adulto':
//        console.log("Você é um(A) adulto (A) !")
//        break 
//    default:
//        console.log ("idade invalida")
//}

//Exercicio 10

//let num1 = Number(prompt('informe o primeiro valor: '))
//let num2 = Number(prompt('informe o segundo valor: '))

//let a = num1
//let b = num2

//do {
//    let temp = b
//    b = a % b
//    a = temp
//} while ( b !== 0 )

//const MDC = a 
//console.log ('O maior divisor comum de ${num1} e ${num2} é ${MDC}')

//Exercicios primos 

//let prime = Number(prompt('Qual o numero que deseja verificar ? '))

//for (let i = 1; i < prime; i++){
 //   if ((prime % i === 0) && (i !== 1)){
//        console.log ('Não é primo! ')
//        break
//    }
//    if (i === (prime - 1)){
//        console.log ('É primo!')
//    }
//}

//let count = 0
//let num = 101

//do {
//    let primo = 0
//    for (let i = 1; i <= num; i++){
//        if (num % i === 0){
//            primo++
//        }
//    }
//    if (primo === 2 ){
//        console.log (num)
//        count++
//    }
//    num++
//} while (count < 50)

//ARRAYS
let carros = Array ()

carros [0] = 'Civic'
carros [1] = 'Fusca'
carros [2] = 10
carros [3] = true
carros ['jose'] = 15

console.log (carros)