import java.util.Arrays;
import java.util.Scanner;

public class Anagramas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Digite a primeira palavra: ");
            String palavra1 = scanner.nextLine().trim().toLowerCase();
            
            System.out.print("Digite a segunda palavra: ");
            String palavra2 = scanner.nextLine().trim().toLowerCase();
            
            // Converte as palavras para arrays de caracteres
            char[] array1 = palavra1.toCharArray();
            char[] array2 = palavra2.toCharArray();
            
            // Ordena os arrays para comparação
            Arrays.sort(array1);
            Arrays.sort(array2);
            
            // Verifica se os arrays ordenados são iguais
            if (Arrays.equals(array1, array2)) {
                System.out.println("As palavras são anagramas.");
            } else {
                System.out.println("As palavras não são anagramas.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro. Certifique-se de digitar palavras válidas.");
        } finally {
            scanner.close(); // Garante o fechamento do Scanner
        }
    }
}
