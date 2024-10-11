let prime = Number(prompt('Qual o numero que deseja verificar ? '))

for (let i = 1; i < prime; i++){
    if ((prime % i === 0) && (i !== 1)){
        console.log ('Não é primo! ')
        break
    }
    if (i === (prime - 1)){
        console.log ('É primo!')
    }
}