// let serie = {
//    nome: "Supernatural",
//    genero: "Suspense, Terror, Ação",
//    nrTemporadas: 15,
//    status: "Encerrado", 
//    classificacao: 16
 //}
 //console.log (serie)

let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    year: 1925, 
    mostrarCaracteristicas: function(){
        return (this.titulo + " Foi escrito por "+ this.autor)
    }
}

//console.log (livro.mostrarCaracteristicas())

let carro = {
    nome: 'cheve',
    modelo: 'chevette',
    velocidadeMaxima: 350,
    ano: 2005,
    acelerar: function(){
        return "Acelerando com o pé no porão"
    }
}

//console.log (carro)
//console.log (carro.acelerar())

let motor = "1000"
let nome = "BMW S1000RR"
let tipo = "esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor
}

//console.log (moto)

//let obj1 = {
//    nome: "bruce",
//    profissao: "Batman"
//}

//let obj2 = obj1 

//obj2.companheiro = "Robin"

//console.log (obj1)
//console.log (obj2)

//function computador (processador, gpu, ram, armazenamento){
//    this.processador = processador
//    this.gpu = gpu
//    this.ram = ram
//    this.armazenamento = armazenamento

//    this.ligar = function () {
        //console.log ('o ${this.processador} está funcionando !')
//    }
//}

//this.mostrarEspecificacoes = function() {
//   return ('processador: ${this.processador}, gpu: ${this.gpu}, ram: ${this.ram}, armazenamento: ${this.armazenamento}')
//}
//let pc = new computador ("i9", "RTX4090", "16GB", "500GB SSD")
//console.log (pc.mostrarEspecificacoes())

const jogadores = ['Pelé', 'Messi', 'Cr7']

for (let jogador of jogadores){
    console.log (jogador)
}