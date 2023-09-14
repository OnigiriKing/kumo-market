// function to delete product
export default function deleteObject(key, state, set) {
  const updatedCartItems = { ...state };
  delete updatedCartItems[key];
  set(updatedCartItems);
}
