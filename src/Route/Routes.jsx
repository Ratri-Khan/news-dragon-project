import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/login/Login";
import Category from "../Pages/category/Category";
import News from "../Pages/news/News";
import NewsLayout from "../Layout/newsLayout";


const router = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news', 
    element: <NewsLayout></NewsLayout>,
    children: [
        {
            path: ':id',
            element: <News></News>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
  }
  ]);
  export default router;