var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {};
 var random = Math.floor(Math.random() * 100);
 newItem.itemName = item;
 newItem.price = Number(random);
 cart.push(newItem);
return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  //Should loop over every item in the cart
  //return a statement of what items are in the cart
  if (cart.length == 0)
  {
    return "Your shopping cart is empty.";
  } else {
    return null};
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
