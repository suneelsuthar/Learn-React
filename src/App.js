import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Header } from "./components/header";
import ProfilePic from "./logo.svg";
import UserCard from "./components/userCard";
// import  router  from "./router";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MyProvider from "./context/MyProvider";
// import MyProvider from "./MyProvider";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </div>
  );
}

export default App;
