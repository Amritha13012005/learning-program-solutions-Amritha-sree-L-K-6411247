package settingJUnit;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator c = new Calculator(); 
        assertEquals(10, c.add(5, 5));   
    }
}
