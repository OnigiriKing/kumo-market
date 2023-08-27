import CartMenu from "./components/CartMenu";
import DropMenu from "./components/DropMenu";


export default function Overlay({ cartItems, setCartItems, cartCount }) {
  return (
    <>
      <DropMenu />
      <CartMenu
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCount={cartCount}
      />
    </>
  );
}