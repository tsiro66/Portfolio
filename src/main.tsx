import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import Home from "./components/Pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.tsx";
import About from "./components/Pages/About.tsx";
import Layout from "./components/Layout.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Pricing from "./components/Pages/Pricing.tsx";
import MyWork from "./components/Pages/MyWork.tsx";
import Services from "./components/Pages/Services.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "mywork",
        element: <MyWork />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
