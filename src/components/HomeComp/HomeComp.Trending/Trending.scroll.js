export default function scroll(direction) {
  if (direction === "right") {
    document.querySelector(".trending-items").scrollBy(225, 0);
  } else {
    document.querySelector(".trending-items").scrollBy(-225, 0);
  }
}
