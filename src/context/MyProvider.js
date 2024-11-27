import React, { useState ,useEffect} from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Hello, Context!");
  const [list,setlist] = useState([])
  const [user, setuser] = useState({
    name: "Test",
    lname: "Kumar",
    password: "234234",
  });

  const logout = () => {
    // firebase.logout();
    // navigate("login")

  };




  const getItems=()=>{

    // setlist(data)

  }

  useEffect(()=>{
    getItems()
  },[])
  return (
    <MyContext.Provider
      value={{ sharedState, setSharedState, user, setuser, logout,list }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
