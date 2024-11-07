import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter(
  [
                        // Static Routing
                        // Static Routing
    {
      path:'/',
      element: <Home/>
    },{
      path : 'about',
      element : <About/>
    },{
      path : 'course',
      element : <Course/>
    },
    {
        path : 'blog',
        element : <Blog/>
    },
                          // Dynamic Routing
                          // Dynamic Routing
    {
      path: 'blog/:id',    // Dynamic path
      element: <BlogDetails/>
    },
    {
      path: '*',    // Give error 404 if url is not found.  // * jodi path ekhane define na kora thake tokhon
      element: <Error404/>                                  // eta (<Error404/>) call hobe
    }
  ]
)

root.render(
  <React.StrictMode>
      <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
