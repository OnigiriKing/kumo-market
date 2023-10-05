// To change amount of product
export default function changeAm(type, key,state, set) {
  const baseObject = { ...state };
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
