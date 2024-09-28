import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from "./error-page.jsx";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/blogs.jsx";
import Statictic from "./Statictic/Statictic.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statictic",
        element: <Statictic></Statictic>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      }
    ],
    

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
