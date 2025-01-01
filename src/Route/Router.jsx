import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { AddArtifacts } from "../Pages/AddArtifacts";
import { PrivateRouter } from "./PrivateRouter";
import { ArtifactDetails } from "../Pages/ArtifactDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_artifacts",
        element: (
          <PrivateRouter>
            <AddArtifacts></AddArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/artifacts_details/:id",
        element: (
          <PrivateRouter>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/artifactsDetails/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
