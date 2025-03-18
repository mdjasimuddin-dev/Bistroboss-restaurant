import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { HeadProvider } from 'react-head';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <RouterProvider router={router}></RouterProvider>
    </HeadProvider>
  </StrictMode>
);
