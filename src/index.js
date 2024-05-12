import { random } from "./random/random.js";
import { randomHash } from "./randomHash/randomHash.js";
import { filterProducts } from "./shop/product.js";

// random number
console.log(random(1, 100));

// random hash
console.log(randomHash());

// shop
const samsungPhones = filterProducts('Samsung');

console.log(samsungPhones);
