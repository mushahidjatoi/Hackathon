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
// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Display initial products
    displayProducts();
});
