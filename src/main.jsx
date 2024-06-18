import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './components/Page/HomePage.jsx';
import AboutPage from './components/Page/AboutPage.jsx';
import BlogPage from './components/Page/BlogPage.jsx';
import PortfolioPage from './components/Page/PortfolioPage.jsx';
import ServicePage from './components/Page/ServicePage.jsx';
import ErrorPage from './components/Page/404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/blog",
    element: <BlogPage></BlogPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/Portfolio",
    element: <PortfolioPage></PortfolioPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/service",
    element: <ServicePage></ServicePage>,
    errorElement: <ErrorPage></ErrorPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
