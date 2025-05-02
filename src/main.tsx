import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.tsx";
import About from "./components/Pages/About.tsx";
import Layout from "./components/Layout.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Projects from "./components/Pages/Projects.tsx";

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
        path: "projects",
        element: <Projects />,
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
