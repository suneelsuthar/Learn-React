import React from "react";
import "./../styles/pricecard.css";
const PriceCard = (props) => {
    const {price,title} = props.data

    
  return (
    <div className="_card">
      <div className="_row">
        <div className="_info">
          <h4>{price}</h4>
          <p>{title}</p>
        </div>
        <div className="_circle"></div>
      </div>
    </div>
  );
};

export { PriceCard };
