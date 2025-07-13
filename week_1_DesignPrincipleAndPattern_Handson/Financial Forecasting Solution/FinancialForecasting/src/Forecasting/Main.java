package Forecasting;


public class Main {
    public static void main(String[] args) {
        double currentValue = 10000.0;
        double growthRate = 0.08; // 8% annual growth
        int years = 5;

        double futureValueRecursive = FinancialForecast.forecastRecursive(currentValue, growthRate, years);
        System.out.println("Future Value (Recursive): ₹" + futureValueRecursive);

        double futureValueIterative = FinancialForecast.forecastIterative(currentValue, growthRate, years);
        System.out.println("Future Value (Iterative): ₹" + futureValueIterative);
    }
}

