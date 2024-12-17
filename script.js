const cart = [];

// Função para adicionar itens ao carrinho
function addToCart() {
    const model = document.getElementById('model').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const designInput = document.querySelector('input[name="design"]:checked');

    if (!designInput) {
        alert("Por favor, selecione uma estampa.");
        return;
    }

    const design = designInput.value;
    const designThumbnail = designInput.nextElementSibling.querySelector('img').src;

    cart.push({ model, size, quantity, design, designThumbnail });
    updateCart();
}

// Atualizar a lista do carrinho
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        cartItems.innerHTML += `
            <li>
                <img src="${item.designThumbnail}" alt="${item.design}" width="40" height="40">
                ${item.quantity}x ${item.model} - Tamanho ${item.size} - ${item.design}
            </li>
        `;
    });
}

// Função para finalizar o pedido
function checkout() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone || cart.length === 0) {
        alert("Por favor, preencha todos os dados e adicione itens ao carrinho.");
        return;
    }

    const data = { name, email, phone, cart };

    console.log("Pedido enviado:", data);
    alert("Pedido enviado com sucesso!");

    // Limpa os campos e o carrinho
    document.getElementById('orderForm').reset();
    document.getElementById('personalDataForm').reset();
    cart.length = 0;
    updateCart();
}
