var cartItem = {}
var price = Math.floor(Math.random() * 101);
function addToCart(item) {
 // write your code here


 cartItem.itemName = item;
 cartItem.itemPrice = price;

 var output = `${cartItem.itemName} has been added to your cart. Item price is ${cartItem.itemPrice}`;



return output
}

console.log(addToCart(""))
function viewCart(){
  //Should loop over every item in the cart
  //return a statement of what items are in the cart
  if (cartItem.itemName.length <= 0)
  {
    return "Your shopping cart is empty.";
  } else {
    return null};
}
console.log(viewCart())
console.log(cartItem.itemName.length)
