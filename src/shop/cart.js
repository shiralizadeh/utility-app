const cart = [];

function addToCart(product) {
  cart.push({
    productId: product.id,
    quantity: 1,
  });
}

function addQuantity(product) {
  const index = cart.findIndex((item) => item.productId === product.id);

  cart[index].quantity++;
}

function removeQuantity(product) {
  const index = cart.findIndex((item) => item.productId === product.id);

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
}

export {
  cart,
  addToCart,
  addQuantity,
  removeQuantity,
}