import { Product } from './product';

interface CartItem {
  productId: number;
  quantity: number;
}

const cart: CartItem[] = [];

function addToCart(product: Product) {
  cart.push({
    productId: product.id,
    quantity: 1,
  });
}

function addQuantity(product: Product) {
  const index = cart.findIndex((item) => item.productId === product.id);

  cart[index].quantity++;
}

function removeQuantity(product: Product) {
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
