import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar /> <About />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar /> <Login />
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
