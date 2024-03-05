export function addToCart(items, cart) {
  const itemSearch = cart.filter((item) => item.title == items.title);
  console.log(itemSearch);
  if (itemSearch.length > 0) {
    itemSearch[0].quantity += items.quantity;
  } else {
    cart.push(items);
  }
}

export function removeItem(itemTitle, cart) {
  const itemIndex = cart.findIndex(
    (cartItem) =>
      cartItem.title.trim().toLowerCase() === itemTitle.trim().toLowerCase()
  );
  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
  } else if (itemIndex === -1) {
    console.log("item not found in the cart");
    return;
  }
}
