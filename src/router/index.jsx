import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Signup from "../pages/signup";
import Login from "../pages/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

export { router };
