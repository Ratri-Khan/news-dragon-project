import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/login/Login";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/category/Category";


const router = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children:[
      // {
      //   path:'/',
      //   element:<Home></Home>
      // },
      {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/category/:id',
        element:<Category></Category>
      },
    ]
  }
  ]);
  export default router;