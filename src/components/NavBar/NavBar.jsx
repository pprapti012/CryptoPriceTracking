import React, { useContext } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import {Link} from "react-router-dom"
import { Coincontext } from "../../context/CoinContext";


const NavBar = () => {
  const { setCurrency } = useContext(Coincontext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
      <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          SignUp <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
