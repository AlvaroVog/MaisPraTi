import java.util.Scanner;

public class ContadorPalavras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Digite uma frase: ");
            String frase = scanner.nextLine().trim(); // Remove espaços extras no início e no final
            
            if (frase.isEmpty()) {
                System.out.println("Nenhuma palavra foi digitada.");
                return;
            }

            // Divide a frase em palavras considerando espaços múltiplos como um único separador
            String[] palavras = frase.split("\\s+");

            System.out.println("Número de palavras na frase: " + palavras.length);
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao processar a entrada.");
        } finally {
            scanner.close(); // Garante que o Scanner seja fechado
        }
    }
}
