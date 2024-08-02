let cart = [];
let totalPrice = 0;

function addToCart(button) {
    const productElement = button.parentElement;
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);

    const product = { id, name, price };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
        totalPrice += product.price;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}
