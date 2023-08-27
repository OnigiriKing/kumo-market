import CartMenu from "./components/DropMenu";
import DropMenu from "./components/CartMenu";


export default function Overlay({ cartItems, setCartItems }) {
  return (
    <>
      <DropMenu />
      <CartMenu cartItems={cartItems} setCartItems={setCartItems}/>
    </>
  );
}