import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
const About = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  var navigate = useNavigate();


  useEffect(() => {
    console.log("hello");
  }, []);





  return (
    <div>
      <Header title="About Page" />
      <br />
      <br />

      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <h1 onClick={() => navigate("/")}>HOme page page</h1>
    </div>
  );
};

export default About;
