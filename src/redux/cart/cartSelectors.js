export const selectCartItems = (state) => {
  return state.cart.cartItems;
}
export const selectCartTotal = (cartItems) => {
  let cartTotal;
  cartTotal = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
  console.log('Inside cartSelectors, cartTotal is: ', cartTotal);
  return cartTotal;
}
export const selectCartItemsCount = (cartItems) => {
  let cartItemsCount;
  cartItemsCount = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
  console.log('Inside cartSelectors, cartItemsCount is: ', cartItemsCount);
  return cartItemsCount;
}