import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Componenets/AddCoffe.jsx';
import UpdateCoffe from './Componenets/UpdateCoffe.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     loader: ()=>fetch('http://localhost:7000/coffe'),
//   },
//   {
//     path:"addcoffe",
//     element:<AddCoffe></AddCoffe>
//   },
//   {
//     path:"updatecoffe/:id",
//     element:<UpdateCoffe></UpdateCoffe>,
//     loader:({params}) => fetch(`http://localhost:7000/coffe/${params.id}`)
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
   
    children:[
      { path:"/",
        element: <App></App>,
      loader: ()=>fetch('http://localhost:7000/coffe'),
    },
      {
        path:"addcoffe",
        element:<AddCoffe></AddCoffe>
      },
      {
        path:"updatecoffe/:id",
        element:<UpdateCoffe></UpdateCoffe>,
        loader:({params}) => fetch(`http://localhost:7000/coffe/${params.id}`)
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
