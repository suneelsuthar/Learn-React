import React from "react";
import "./../styles/header.css";

import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  // console.log(props?.data?.image);

  console.log(props.title);

  return (
    <div className="_header">
      <h1>{props.title}</h1>

      <h5 onClick={() => navigate("about")}>about</h5>
      <h5 onClick={() => navigate("/")}>Home</h5>
      <h5 onClick={() => navigate("contact")}>contact</h5>

      <p></p>
    </div>
  );
};

// export default Header;
export { Header };
