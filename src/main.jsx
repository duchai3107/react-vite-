import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Page/login.jsx';
import RegisterPage from './Page/register.jsx';
import ProductPage from './Page/product.jsx';
import UserPage from './Page/user.jsx';
import Todoapp from './components/ToDolist/Todoapp.jsx';
import ErrorPage from './Page/error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Todoapp />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },

  {
    path: "/register",
    element: <RegisterPage />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
