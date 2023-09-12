import NavBar from "components/NavBar/NavBar";

export default function NavPage({ cartCount }) {
  return (
    <>
      <NavBar cartCount={cartCount} />
    </>
  );
}