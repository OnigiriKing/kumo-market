// function to delete product
function deleteObject(key, state, set) {
  const updatedCartItems = { ...state };
  delete updatedCartItems[key];
  set(updatedCartItems);
}

export default deleteObject;
