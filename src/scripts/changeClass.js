
export function changeClass(baseClass, newClass, check=true) {
    const classList = document.querySelector(baseClass).classList;
    check
      ? classList.contains(newClass)
        ? classList.remove(newClass)
        : classList.add(newClass)
      : classList.add(newClass);
  };


export function closeCart() {
  return {
    onClick: function () {
      changeClass(".cart-menu", "cart-open");
      changeClass(".full-overlay", "overlay-active");
    },
  };
}

  export function closeMenu() {
    return {
      onClick: function () {
        changeClass(".drop-menu", "menu-open");
      },
    };
  }