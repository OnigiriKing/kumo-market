import { Link } from "react-router-dom";
import testImg from "../../../img/test2.png"

export default function Banner({reverse = false}) {
  const content = !reverse ? (
    <div id="banner-screen">
      <div className="banner-wrapper wrapper">
        <div className="banner-text">
          <h2>Creative harmonious living</h2>
          <p>
            Our Products are all made to standard sizes so that you can mix and
            match them freely.
          </p>
          <Link to={"/"}>
            <button>Shop now</button>
          </Link>
        </div>
        <img src={testImg} className="banner-image"></img>
      </div>
    </div>
  ) : (
    <div id="banner-screen">
      <div className=" wrapper banner-wrapper banner-reverse">
        <div className="banner-text">
          <h2>Cozy & Elegant Lifestyle</h2>
          <p>
            Our Products are all made to standard sizes so that you can mix and
            match them freely.
          </p>
          <Link to={"/"}>
            <button>Shop now</button>
          </Link>
        </div>
        <img src={testImg} className="banner-image"></img>
      </div>
    </div>
  );
  return content;
}
