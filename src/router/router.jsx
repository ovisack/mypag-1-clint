import { createBrowserRouter } from "react-router-dom";
 import Navbar from "../component/Navbar";

 import Hero from "../component/Hero"
 import Login from "../component/Login"
 import  Registrar from "../component/Registrar"
 import SingUp from "../component/SingUp";
 import Error from "../component/Error"
import NewRout from "../component/NewRout";
import Update from "../component/Update";


    
const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Hero></Hero>,
          loader: () => fetch("https://server-1001.vercel.app/users")
  
        },
  {
    path:"/Login",
    element:<Login></Login>
  },
  {
    path:"/Register",
    element:<Registrar></Registrar>
  },{
    path:"/singUp",
    element:<SingUp></SingUp>
  },
  {
    element:<NewRout></NewRout>,
    path:"/new"
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader: ({params}) => fetch(`https://server-1001.vercel.app/users/${params.id}`)
    
  }
]
    },
  ]);
    

export default router;