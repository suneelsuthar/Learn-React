import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Header } from "./components/header";
import ProfilePic from "./logo.svg";
import UserCard from "./components/userCard";
// import  router  from "./router";
import {  RouterProvider } from "react-router-dom";
import { router } from "./router";
function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
