import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./home/home";
import "./app.scss";
import Login from "./components/pages/watch/login/Login";
import Register from "./components/pages/watch/register/Register";
import Watch from "./components/pages/watch/watch";
import { Movie } from "@mui/icons-material";

const App = () => {
  const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async () => !user ? redirect('/register') : null
    },
    {
      path: "/register",
      element: <Register />,
      loader: async () => user ? redirect('/login') : null
   
    },
     
    {
      path: "/login",
      element: <Login />,
      loader: async () => !user ? redirect('/register') : null
      
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/watch",
      element: <Watch />,
    },
    {
      path: "/movies",
      element: <Home type="movies" />,
    },
    {
      path: "/series",
      element: <Home type="series" />,
    },
  ]);

  return <RouterProvider
      router={router}
  />
};

export default App;
