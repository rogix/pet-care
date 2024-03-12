import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/fredoka-one";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
