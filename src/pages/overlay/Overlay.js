import CartMenu from "components/CartMenu";

export default function Cart({ cartItems, setCartItems}) {
  return (
    <>
      <CartMenu
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}
