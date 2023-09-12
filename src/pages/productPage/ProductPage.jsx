import Product from "components/Product/Product";

export default function ProductPage({ setCartItems, cartItems }) {

  return (
    <>
      <Product setCartItems={setCartItems} cartItems={cartItems} />
    </>
  );
}
