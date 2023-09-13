// function to delete product
export default function deleteObject(key) {
  const updatedCartItems = { ...cartItems };
  delete updatedCartItems[key];
  setCartItems(updatedCartItems);
}
