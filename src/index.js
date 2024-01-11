import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './components/NotFound';
import Home from './components/Home';
import NewProduct from './components/NewProduct';
import ProductDetail from './components/ProductDetail';
import MyCart from './components/MyCart';
import AllProducts from './components/AllProducts';
import ProtectedRoute from './components/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <AllProducts /> },
      {
        path: 'products/new', element:
          (<ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>)
      },
      { path: 'products/:id', element: <ProductDetail /> },
      {
        path: 'carts', element:
          (<ProtectedRoute>
            <MyCart />
          </ProtectedRoute>)
      },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
