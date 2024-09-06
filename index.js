// Array to hold products
var products = [
    { name: "Product A", quantity: 10, price: 100 },
    { name: "Product B", quantity: 5, price: 50 },
    { name: "Product C", quantity: 20, price: 200 }
];
// Function to display products in the table
function displayProducts() {
    var tableBody = document.querySelector('tbody');
    if (tableBody === null)
        return; // Exit if tableBody is null
    tableBody.innerHTML = ''; // Clear the existing table content
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = "$".concat(product.price.toFixed(2));
        row.appendChild(priceCell);
        tableBody.appendChild(row);
    });
}
// Function to handle adding a new product with validation
function addProduct() {
    var nameInput = document.getElementById('productName');
    var quantityInput = document.getElementById('productQuantity');
    var priceInput = document.getElementById('productPrice');
    if (!nameInput || !quantityInput || !priceInput) {
        alert('Some input fields are missing.');
        return;
    }
    var productName = nameInput.value.trim();
    var productQuantity = parseInt(quantityInput.value, 10);
    var productPrice = parseFloat(priceInput.value);
    // Validation checks
    if (productName === '') {
        alert('Product name cannot be empty.');
        return;
    }
    if (isNaN(productQuantity) || productQuantity <= 0) {
        alert('Quantity must be a positive number.');
        return;
    }
    if (isNaN(productPrice) || productPrice <= 0) {
        alert('Price must be a valid positive number.');
        return;
    }
    // Create a new product object
    var newProduct = {
        name: productName,
        quantity: productQuantity,
        price: productPrice
    };
    // Add the new product to the products array
    products.push(newProduct);
    // Clear the input fields
    nameInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
    // Update the table with the new product
    displayProducts();
}
// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Display initial products
    displayProducts();
    // Attach the event listener to the Add Product button
    var addProductButton = document.getElementById('addProductBtn');
    if (addProductButton) {
        addProductButton.addEventListener('click', addProduct);
    }
    else {
        console.error('Add Product button not found.');
    }
});
