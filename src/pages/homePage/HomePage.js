import HomeComp from "components/HomeComp";

export default function HomePage({ cat, setCat }) {

  return (
    <>
      <HomeComp cat={cat} setCat={setCat} />
    </>
  );
}
