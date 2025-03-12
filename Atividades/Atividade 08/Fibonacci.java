import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Digite um número inteiro positivo (n): ");
            
            if (!scanner.hasNextInt()) {
                System.out.println("Erro: Entrada inválida. Digite um número inteiro positivo.");
                return;
            }
            
            int n = scanner.nextInt();

            if (n <= 0) {
                System.out.println("Erro: O número deve ser maior que zero.");
                return;
            }

            int a = 0, b = 1;

            System.out.println("Os primeiros " + n + " números da sequência de Fibonacci são:");
            for (int i = 0; i < n; i++) {
                System.out.print(a + " ");
                int proximo = a + b;
                a = b;
                b = proximo;
            }
            System.out.println(); // Quebra de linha após a sequência
        } catch (Exception e) {
            System.out.println("Erro ao processar a entrada. Certifique-se de digitar um número válido.");
        } finally {
            scanner.close(); // Garante que o Scanner será fechado
        }
    }
}
