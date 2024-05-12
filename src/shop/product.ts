export interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "iPhone 13", price: 100 },
  { id: 2, name: "Samsung Galaxy S21", price: 200 },
  { id: 3, name: "Google Pixel 6", price: 300 },
  { id: 4, name: "OnePlus 9 Pro", price: 400 },
  { id: 5, name: "Xiaomi Mi 11", price: 500 },
  { id: 6, name: "Sony Xperia 1 III", price: 600 },
  { id: 7, name: "Samsung Galaxy S23", price: 700 },
  { id: 8, name: "Motorola Edge+", price: 800 },
  { id: 9, name: "Huawei P50", price: 900 },
  { id: 10, name: "Nokia 9 PureView", price: 1000 },
];

function filterProducts(query: string): Product[] {
  return products.filter((product) => product.name.includes(query));
}

function addProduct(product: Product): void {
  products.push(product);
}

function removeProduct(id: number): void {
  const index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    products.splice(index, 1);
  }
}

function averagePrice(): number {
  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((acc, product) => acc + product.price, 0);
  return total / products.length;
}

export { products, filterProducts, addProduct, removeProduct, averagePrice };
