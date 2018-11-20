var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var price = Math.floor(Math.random() * 101);
function addToCart(item) {
 // write your code here
 var newItem = {};
 newItem.itemPrice = price;
 newItem.itemName = item;
 cart.push(newItem);
return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
