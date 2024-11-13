import React from "react";
import "./../styles/header.css";
const Header = (props) => {
  // console.log(props?.data?.image);
  return (
    <div className="_header">
      <h1>Header</h1>
      <h1>{props.pagetitle}</h1>
      <h3>{props?.data?.productName}</h3>
      <h1>gdsfgsdg</h1>
      <p></p>
    
    </div>
  );
};

// export default Header;
export { Header };
