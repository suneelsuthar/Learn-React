import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Hello, Context!");
  const [value, setvalue] = useState("1202398502938489023");

  return (
    <MyContext.Provider
      value={{ sharedState, setSharedState, value, setvalue }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
