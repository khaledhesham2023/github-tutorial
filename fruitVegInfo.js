// Function to get Apple information
function getAppleInfo() {
    return "Apple: Apples are sweet, edible fruits produced by an apple tree. " +
           "They are a good source of dietary fiber, vitamin C, and various antioxidants. " +
           "Apples are commonly eaten raw, but they can also be used in cooking and baking.";
}

// Function to get Banana information
function getBananaInfo() {
    return "Banana: Bananas are a widely popular fruit known for their sweet taste and soft texture. " +
           "They are an excellent source of potassium, vitamin B6, and vitamin C, making them a nutritious and convenient snack. " +
           "Bananas are also a good source of dietary fiber, which can help regulate digestion.";
}

// Function to get Carrot information
function getCarrotInfo() {
    return "Carrot: Carrots are root vegetables that are highly nutritious and versatile. " +
           "They are a rich source of beta-carotene, which the body converts into vitamin A, " +
           "essential for good vision, skin health, and immune function. " +
           "Carrots are also packed with antioxidants, fiber, and various vitamins and minerals.";
}

// Function to get Spinach information
function getSpinachInfo() {
    return "Spinach: Spinach is a leafy green vegetable known for its high nutritional value. " +
           "It is an excellent source of iron, calcium, magnesium, and vitamins A, C, and K. " +
           "Spinach is low in calories, making it an ideal food for weight management.";
}

// Function to display information in a specific HTML element
function displayInfo(info, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = info;
    }
}

// Example of how to use these functions with the HTML page
document.addEventListener('DOMContentLoaded', function() {
    // Check if the page has an element with id 'info'
    const infoElement = document.getElementById('info');
    if (infoElement) {
        // You can dynamically set the content based on user interaction or page type
        // For example, if it's an apple page, you can set apple info:
        displayInfo(getAppleInfo(), 'info');
    }
    
    // Add event listeners if needed (example)
    document.getElementById('appleLink').addEventListener('click', function() {
        displayInfo(getAppleInfo(), 'info');
    });

    document.getElementById('bananaLink').addEventListener('click', function() {
        displayInfo(getBananaInfo(), 'info');
    });

    document.getElementById('carrotLink').addEventListener('click', function() {
        displayInfo(getCarrotInfo(), 'info');
    });

    document.getElementById('spinachLink').addEventListener('click', function() {
        displayInfo(getSpinachInfo(), 'info');
    });
});
