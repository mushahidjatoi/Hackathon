// Product Interface
interface Product {
    name: string;
    quantity: number;
    price: number;
}

// Array to hold products
const products: Product[] = [
    { name: "Product A", quantity: 10, price: 100 },
    { name: "Product B", quantity: 5, price: 50 },
    { name: "Product C", quantity: 20, price: 200 }
];

// Function to display products in the table
function displayProducts() {
    const tableBody = document.querySelector('tbody') as HTMLTableSectionElement | null;
    if (tableBody === null) return; // Exit if tableBody is null

    tableBody.innerHTML = '';  // Clear the existing table content

    products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Display initial products
    displayProducts();
});
