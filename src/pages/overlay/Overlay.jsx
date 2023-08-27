import CartMenu from "./components/CartMenu";
import DropMenu from "./components/DropMenu";


export default function Overlay({ cartItems, setCartItems }) {
  return (
    <>
      <DropMenu />
      <CartMenu cartItems={cartItems} setCartItems={setCartItems}/>
    </>
  );
}