import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Digite o primeiro número: ");
            double num1 = scanner.nextDouble();
            
            System.out.print("Digite o segundo número: ");
            double num2 = scanner.nextDouble();
            
            System.out.print("Digite o operador (+, -, *, /): ");
            char operador = scanner.next().charAt(0);
            
            double resultado;
            
            switch (operador) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 != 0) {
                        resultado = num1 / num2;
                    } else {
                        System.out.println("Erro: Divisão por zero.");
                        return;
                    }
                    break;
                default:
                    System.out.println("Operador inválido.");
                    return;
            }
            
            System.out.println("Resultado: " + resultado);
        } catch (Exception e) {
            System.out.println("Entrada inválida! Certifique-se de digitar números e operadores corretamente.");
        } finally {
            scanner.close();
        }
    }
}
