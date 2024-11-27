import React, { useContext } from "react";
import "./../styles/header.css";
import MyContext from "../context/MyContext";

const Modal = (props) => {
  const { user } = useContext(MyContext);
  // console.log(props?.data?.image);

  return (
    <div className="_header">
      <h1>hello {user.name}</h1>
      {props.children}
    </div>
  );
};

// export default Header;
export { Modal };
