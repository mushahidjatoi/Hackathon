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

// Function to handle adding a new product with validation
function addProduct() {
    const nameInput = document.getElementById('productName') as HTMLInputElement | null;
    const quantityInput = document.getElementById('productQuantity') as HTMLInputElement | null;
    const priceInput = document.getElementById('productPrice') as HTMLInputElement | null;

    if (!nameInput || !quantityInput || !priceInput) {
        alert('Some input fields are missing.');
        return;
    }

    const productName = nameInput.value.trim();
    const productQuantity = parseInt(quantityInput.value, 10);
    const productPrice = parseFloat(priceInput.value);

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
    const newProduct: Product = {
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
document.addEventListener('DOMContentLoaded', () => {
    // Display initial products
    displayProducts();

    // Attach the event listener to the Add Product button
    const addProductButton = document.getElementById('addProductBtn') as HTMLButtonElement | null;
    if (addProductButton) {
        addProductButton.addEventListener('click', addProduct);
    } else {
        console.error('Add Product button not found.');
    }
});
