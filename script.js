let cart = [];
let totalPrice = 0;

function addToCart(button) {
    const productElement = button.parentElement;
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);

    const productIndex = cart.findIndex(product => product.id === id);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        const product = { id, name, price, quantity: 1 };
        cart.push(product);
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} (${product.quantity}x) - $${product.price * product.quantity}`;
        cartItems.appendChild(li);
        totalPrice += product.price * product.quantity;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

function showCategory(category) {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('products').classList.remove('hidden');
    document.querySelectorAll('.category').forEach(cat => cat.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');
    document.getElementById('category-title').textContent = category.replace('category', 'Category ');
}

function showCategories() {
    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('products').classList.add('hidden');
}
