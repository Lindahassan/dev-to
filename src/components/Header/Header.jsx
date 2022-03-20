import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Image } from "antd";
import devlogo from "../../assets/images/devlogo.png";
//style
import "./Header.css";

const Header = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  let navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <div className="header">
      <div className="logo">
        <Image width={50} preview={false} src={devlogo} />
        <Search placeholder="Search ... " onSearch={onSearch} />
      </div>
      <div className="btn1">
        <button
          className="c-link c-link--block justify-center"
          onClick={handleClick}
        >
          Login
        </button>
        <button
          className="c-cta c-cta--branded mr-2 whitespace-nowrap"
          onClick={() => navigate("/register")}
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default Header;
