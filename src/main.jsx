import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Nav/>,
//     children:[
       
//         {
//             path: '/',
//             element:<Home/>, 
//         },
       
//         {
//             path: '/about',
//             element:<About/>, 
//         },
//         {
//             path: '/contact',
//             element:<Contact/>, 
//         },
//         {
//             path: '/product',
//             element:<Product/>, 
//         },
//         {
//             path: '/login',
//             element:<Login/>, 
//         },
//     ]

// }




// ])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}

    <App />
  </React.StrictMode>,
)
