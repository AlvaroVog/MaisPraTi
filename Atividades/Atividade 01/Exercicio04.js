/*Exercicio04: Crie um menu interativo no console que oferece ao usuário a escolha de 
três opções. Utilize switch-case para implementar a lógica de cada opção
selecionada. */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function exibirMenu() {
    console.log("=== MENU INTERATIVO ===");
    console.log("1. Exibir mensagem de boas-vindas");
    console.log("2. Solicitar nome e cumprimentar");
    console.log("3. Sair");
    
    rl.question("Escolha uma opção (1, 2, 3): ", function(opcao) {
        switch(opcao) {
            case '1':
                console.log("Bem-vindo ao nosso programa!");
                exibirMenu(); 
                break;
            case '2':
                rl.question("Digite seu nome: ", function(nome) {
                    console.log("Olá, " + nome + "! Prazer em conhecê-lo.");
                    exibirMenu();
                });
                break;
            case '3':
                console.log("Saindo do programa. Até logo!");
                rl.close();  
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
                exibirMenu(); 
        }
    });
}

exibirMenu();
