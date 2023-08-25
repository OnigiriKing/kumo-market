import { Link } from "react-router-dom";
import { allSvg } from "../../svg/allSvg";
import { changeClass } from "../../scripts/changeClass";
import logo from "../../img/logo.png"
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";

export default function NavBar() {

 const html = window.location.pathname.includes("product/")?"Yes":"no"; 

  const [link, setLink] = React.useState("1");

  const location = useLocation().pathname;

  React.useEffect(() => {
    if (location.includes("product/")) {
      setLink(location.split("/")[2]);
    } else {
      setLink(Math.floor(Math.random() * 12) + 1);
    }
    console.log(link)
  }, [location]);

  
  return (
    <nav id="nav-bar">
      <div className="wrapper nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} />
          <h1>{location.pathname}</h1>
        </Link>
        <div className="nav-links">
          <Link to="/categories/all">CATEGORIES</Link>
          <Link to={`/product/${link}`}>PRODUCT PAGE</Link>
          <div className="nav-basket">{allSvg(30).basket}</div>
        </div>
      </div>
    </nav>
  );
}
