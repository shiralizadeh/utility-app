const products = [
  { id: 1, name: "iPhone 13", price: 100 },
  { id: 2, name: "Samsung Galaxy S21", price: 200 },
  { id: 3, name: "Google Pixel 6", price: 300 },
  { id: 4, name: "OnePlus 9 Pro", price: 400 },
  { id: 5, name: "Xiaomi Mi 11", price: 500 },
  { id: 6, name: "Sony Xperia 1 III", price: 600 },
  { id: 7, name: "LG Velvet 2", price: 700 },
  { id: 8, name: "Motorola Edge+", price: 800 },
  { id: 9, name: "Huawei P50", price: 900 },
  { id: 10, name: "Nokia 9 PureView", price: 1000 },
];


function filterProduct(id) {
  return products.filter((product) => product.id === id);
}

function addProduct(product) {
  products.push(product);
}

function removeProduct(id) {
  const index = products.findIndex((product) => product.id === id);

  products.splice(index, 1);
}

function averagePrice() {
  return (
    products.reduce((acc, product) => acc + product.price, 0) / products.length
  );
}

export {
  products,
  filterProduct,
  addProduct,
  removeProduct,
  averagePrice,
}
