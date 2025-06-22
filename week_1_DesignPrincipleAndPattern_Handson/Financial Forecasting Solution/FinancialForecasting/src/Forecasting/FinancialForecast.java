package Forecasting;



public class FinancialForecast {

    // Recursive Method to calculate future value
    public static double forecastRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastRecursive(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized version using loop (avoids stack overflow for large years)
    public static double forecastIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }
}
