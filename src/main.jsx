import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import PostList from "./routes/PostList.jsx";
import SinglePost from "./routes/SinglePost.jsx";
import Write from "./routes/Write.jsx";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts", element: <PostList /> },
      { path: "/:slug", element: <SinglePost /> },
      { path: "/write", element: <Write /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
