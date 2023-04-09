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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("categories.json")
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "AppliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: "*",
    element: <h2>Easy there SPARKY!<br></br> You are out of the map!</h2>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
