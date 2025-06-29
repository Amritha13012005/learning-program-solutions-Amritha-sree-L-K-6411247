package Arrange;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;  

    
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setting up...");
    }

   
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Tearing down...");
    }

    
    @Test
    public void testAdd() {
        // Arrange
        int a = 5;
        int b = 7;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(12, result);
    }

    
    @Test
    public void testMultiply() {
        // Arrange
        int a = 3;
        int b = 4;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(12, result);
    }
}
