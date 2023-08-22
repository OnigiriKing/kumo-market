import Start from "./components/Start"
import Products from "./components/Products";
import Trending from "./components/Trending"
import Banner from "./components/Banner"


export default function HomePage() {

  
  return (
    <div id="home-page">
      <Start />
      <Products/>
      <Banner />
      <Trending />
      <Banner reverse={true} />
    </div>
  );
}