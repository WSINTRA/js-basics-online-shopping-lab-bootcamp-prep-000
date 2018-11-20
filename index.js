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
 var price = Math.floor(Math.random() * 101);
 cart.itemName = item;
 cart.itemPrice = price;
 var output = `${cart.itemName} has been added to your cart.`;
return output
}

function viewCart(){
  //Should loop over every item in the cart
  //return a statement of what items are in the cart
  if (cart.itemName.length <= 0)
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
