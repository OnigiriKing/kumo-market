import Categories from "components/Categories";


export default function CategoriesPage({ cat, setCat }) {
  return (
    <>
      <Categories cat={cat} setCat={setCat} />
    </>
  );
}