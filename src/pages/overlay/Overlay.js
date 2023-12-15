import CartMenu from "components/CartMenu";

export default function Cart({ setCartItems}) {
  return (
    <>
      <CartMenu
        setCartItems={setCartItems}
      />
    </>
  );
}
