public class FruitVegInfo {

    // Information about Apple
    public static String getAppleInfo() {
        return "Apple: Apples are sweet, edible fruits produced by an apple tree. " +
                "They are a good source of dietary fiber, vitamin C, and various antioxidants. " +
                "Apples are commonly eaten raw, but they can also be used in cooking and baking.";
    }

    // Information about Banana
    public static String getBananaInfo() {
        return "Banana: Bananas are a widely popular fruit known for their sweet taste and soft texture. " +
                "They are an excellent source of potassium, vitamin B6, and vitamin C, making them a nutritious and convenient snack. " +
                "Bananas are also a good source of dietary fiber, which can help regulate digestion.";
    }

    // Information about Carrot
    public static String getCarrotInfo() {
        return "Carrot: Carrots are root vegetables that are highly nutritious and versatile. " +
                "They are a rich source of beta-carotene, which the body converts into vitamin A, " +
                "essential for good vision, skin health, and immune function. " +
                "Carrots are also packed with antioxidants, fiber, and various vitamins and minerals.";
    }

    // Information about Spinach
    public static String getSpinachInfo() {
        return "Spinach: Spinach is a leafy green vegetable known for its high nutritional value. " +
                "It is an excellent source of iron, calcium, magnesium, and vitamins A, C, and K. " +
                "Spinach is low in calories, making it an ideal food for weight management.";
    }

    // Main method for testing purposes
    public static void main(String[] args) {
        System.out.println(getAppleInfo());
        System.out.println(getBananaInfo());
        System.out.println(getCarrotInfo());
        System.out.println(getSpinachInfo());
    }
}
