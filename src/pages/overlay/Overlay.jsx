import CartMenu from "./components/CartMenu";


export default function Overlay({ cartItems, setCartItems, cartCount }) {
  return (
    <>
      <CartMenu
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCount={cartCount}
      />
    </>
  );
}