#include <stdio.h>
#include <math.h>

double calculate(int n) {
    double sum = 0.0;
    
    for (int i = 1; i <= n; i++) {
        // Calculate 3^i
        double power_3 = 1.0;
        for (int k = 1; k <= i; k++) {
            power_3 *= 3.0;
        }
        
        // Calculate ln(i+1)
        double log_part = log(i + 1);
        
        // Calculate product of (2j+1)
        double product = 1.0;
        for (int j = 1; j <= i; j++) {
            product *= (2 * j + 1);
        }
        
        // Combine all parts
        double result = (power_3 * log_part) / product;
        
        // Add to total sum
        sum += result;
    }
    
    return sum;
}

int main() {
    int n;
    printf("Enter n: ");
    scanf("%d", &n);
    
    double result = calculate(n);
    printf("Result: %.7f\n", result);
    
    return 0;
}

printf("hello");