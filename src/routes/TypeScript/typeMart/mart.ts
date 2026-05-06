import products from "./products";
// globale variabelr
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
// alt om shipping for kunden og tax håntering

const shippingAddress: string = "575 Broadway, New York City, New York";
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
};

const productName: string = "fanny pack";
const product = products.filter((product) => product.name === productName)[0];

if (Number(product.price) > 25) {
  shipping = 0;
  console.log("We provide free shipping for this product");
} else {
  shipping = 5;
}

if (product.preOrder === "true") {
  console.log("We wil send you a message when your product in on its way.");
} else {
  console.log("Dette gikk ikke helt etter planen");
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product: ${product.name}
Address: ${shippingAddress}
Price:  $${product.price} 
tax:    $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:  $${total.toFixed(2)}

`
)
