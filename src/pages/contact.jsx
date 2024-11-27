import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Contact = () => {
  const { user, sharedState, setSharedState, setuser } = useContext(MyContext);

  const updateuser = () => {
    user.name="Akash"
    setuser({...user})

  };
  console.log(user)
  return (
    <div>
      <h1>Contact page page</h1>
      <input
        type="text"
        value={sharedState}
        onChange={(e) => setSharedState(e.target.value)}
      />
      <button onClick={updateuser}>update user</button>
      {/* <img src='../../' /> */}
    </div>
  );
};

export default Contact;
