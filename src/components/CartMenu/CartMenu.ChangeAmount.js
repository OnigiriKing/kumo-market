// To change amount of product
export default function changeAmount(type, key, set) {
  const baseObject = { ...cartItems };
  if (type === "plus") {
    if (baseObject[key].amount < 10) {
      baseObject[key].amount++;
    }
  }
  if (type === "minus") {
    if (baseObject[key].amount > 1) {
      baseObject[key].amount--;
    }
  }
  set(baseObject);
}
