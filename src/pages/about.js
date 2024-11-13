import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/")}>about page</h1>
      {/* <img src='../../' /> */}
    </div>
  );
};

export default About;
