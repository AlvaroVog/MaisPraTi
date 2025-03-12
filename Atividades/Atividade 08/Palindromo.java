import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Digite uma palavra: ");
            String palavra = scanner.nextLine().trim().toLowerCase(); // Remove espaços extras e padroniza
            
            // Inverte a palavra
            String palavraInvertida = new StringBuilder(palavra).reverse().toString();

            // Verifica se é palíndromo
            if (palavra.equals(palavraInvertida)) {
                System.out.println("A palavra é um palíndromo.");
            } else {
                System.out.println("A palavra não é um palíndromo.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao ler a entrada. Tente novamente.");
        } finally {
            scanner.close(); // Garante o fechamento do Scanner
        }
    }
}
