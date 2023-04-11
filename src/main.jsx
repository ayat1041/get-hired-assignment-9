import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetail from './components/JobDetail/JobDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // loader: () => fetch("/jobs.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/categories.json")
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json")
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "job/:jobId",
        element: <JobDetail></JobDetail>,
        loader: () => fetch("/jobs.json"),
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
