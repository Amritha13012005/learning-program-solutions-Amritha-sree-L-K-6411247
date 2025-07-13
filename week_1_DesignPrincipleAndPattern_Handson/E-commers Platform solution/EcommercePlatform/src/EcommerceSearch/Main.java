package EcommerceSearch;



public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Mobile", "Electronics"),
            new Product(4, "Shirt", "Clothing"),
            new Product(5, "Watch", "Accessories")
        };

        
        Product result1 = SearchAlgorithms.linearSearch(products, "Shoes");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        
        Product result2 = SearchAlgorithms.binarySearch(products, "Shoes");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
