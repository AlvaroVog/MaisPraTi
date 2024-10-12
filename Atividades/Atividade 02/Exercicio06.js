/*Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. 
Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.*/

let funcionarios = [
    { nome: 'Carlos', cargo: 'Desenvolvedor', salario: 5000 },
    { nome: 'Amanda', cargo: 'Analista de Sistemas', salario: 7000 },
    { nome: 'João', cargo: 'Designer', salario: 4000 },
    { nome: 'Paula', cargo: 'Gerente de Projetos', salario: 8500 }
];

let salarioMinimo = 6000;

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}
