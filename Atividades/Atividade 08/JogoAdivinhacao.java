import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        int numeroSecreto = random.nextInt(50) + 1; // Número entre 1 e 50
        int palpite = -1; // Inicializado com um valor fora do intervalo válido

        System.out.println("Adivinhe o número entre 1 e 50:");

        while (true) {
            System.out.print("Digite seu palpite: ");
            
            // Verifica se a entrada é válida
            if (!scanner.hasNextInt()) {
                System.out.println("Entrada inválida! Digite um número inteiro.");
                scanner.next(); // Descarta a entrada inválida
                continue;
            }

            palpite = scanner.nextInt();
            
            if (palpite < 1 || palpite > 50) {
                System.out.println("Por favor, digite um número entre 1 e 50.");
                continue;
            }
            
            if (palpite < numeroSecreto) {
                System.out.println("Muito baixo! Tente novamente.");
            } else if (palpite > numeroSecreto) {
                System.out.println("Muito alto! Tente novamente.");
            } else {
                System.out.println("🎉 Parabéns! Você adivinhou o número " + numeroSecreto + " corretamente!");
                break;
            }
        }
        
        scanner.close(); // Fecha o Scanner para liberar recursos
    }
}
