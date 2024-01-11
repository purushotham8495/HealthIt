// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Include global styles
import App from './App';
import Apps from './pages/Pharamacy/Apps';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Apps/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Home from './pages/Home';
// import About from './pages/About';
// import Files from './pages/Files';

// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Router,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "home",
//     element: <Home/>,
//   },
//   {
//     path: "files",
//     element: <Files/>,
//   },
//   {
//     path: "about",
//     element: <About/>,
//   },
//   {
//     path: "app",
//     element: <App/>,
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router= {router} />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
