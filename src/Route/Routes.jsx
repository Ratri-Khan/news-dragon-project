import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Shared/Header/Header";
import Login from "../Pages/login/Login";
import Footer from "../Pages/Footer/Footer";
import LoginLayout from "../Layout/loginLayout/LoginLayout";
import Banner from "../Pages/Banner/Banner";


const router = createBrowserRouter([
 {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children:[
    //   {
    //     path:'/',
    //     element:<Navigate to="/category"></Navigate>
    // // },
      {
          path:'/login',
          element:<Login></Login>
      },
      // {
      //   path:'/',
      //   element:<Footer></Footer>
      // },
      {
        path:'/',
        element:<Banner></Banner>
      },
    ]
  },

    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/header',
          element:<Banner></Banner>
        }
      ]
      
    },
  ]);
  export default router;