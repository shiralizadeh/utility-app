const cart = [];

function addToCart(product) {
  cart.push(product);
}

function addQuantity(product) {
  const index = cart.findIndex((item) => item.id === product.id);

  cart[index].quantity++;
}

function removeQuantity(product) {
  const index = cart.findIndex((item) => item.id === product.id);

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