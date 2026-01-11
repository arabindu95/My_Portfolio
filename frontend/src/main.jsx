import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="bottom-right" />
    <RouterProvider router={router} />
  </StrictMode>
);
