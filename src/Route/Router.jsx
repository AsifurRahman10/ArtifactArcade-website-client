import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { AddArtifacts } from "../Pages/AddArtifacts";
import { PrivateRouter } from "./PrivateRouter";
import { ArtifactDetails } from "../Pages/ArtifactDetails";
import { AllArtifacts } from "../Pages/AllArtifacts";
import { LikedArtifacts } from "../Pages/LikedArtifacts";
import { MyArtifacts } from "../Pages/MyArtifacts";
import { UpdateArtifacts } from "../Pages/UpdateArtifacts";
import { Error } from "../Pages/Error";

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
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
        loader: () => fetch("http://localhost:4000/allArtifacts"),
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
        path: "/likedArtifacts",
        element: (
          <PrivateRouter>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRouter>
            <MyArtifacts></MyArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateArtifact/:id",
        element: (
          <PrivateRouter>
            <UpdateArtifacts></UpdateArtifacts>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/artifactsDetails/${params.id}`),
      },
      {
        path: "/artifactsDetails/:id",
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
  {
    path: "*",
    element: <Error></Error>,
  },
]);
