import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Dashboard from './pages/Admin/Dashboard';
import AddProduct from './pages/Admin/AddProduct';
import ProductList from './pages/Admin/ProductList';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ContactUs from './pages/Contact';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleList from './Components/VehicleList';
import Rent from './pages/Rent';
import './style.css';
import MyRents from './pages/MyRents';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/admin',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: 'add',
            element: <AddProduct />,
          },
        ],
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
        children: [
          {
            path: 'all',
            element: <VehicleList type='all' />,
          },
          {
            path: 'cars',
            element: <VehicleList type='car' />,
          },
          {
            path: 'bikes',
            element: <VehicleList type='bike' />,
          },
          {
            path: 'cycles',
            element: <VehicleList type='cycle' />,
          },
        ],
      },
      {
        path: '/rent/:type/:id',
        element: <Rent />,
      },
      {
        path: '/my-rents',
        element: <MyRents />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
