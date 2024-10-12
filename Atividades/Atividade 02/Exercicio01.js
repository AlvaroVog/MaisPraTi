/*Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console. */

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata'
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
