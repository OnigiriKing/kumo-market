// function to delete product
export default function deleteObj(key, state, set) {
  const updatedCartItems = { ...state };
  delete updatedCartItems[key];
  set(updatedCartItems);
}

