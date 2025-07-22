import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/LoginRegister/Register";
import Login from "../pages/LoginRegister/Login";
import ForgotPassword from "../pages/LoginRegister/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'register',
      element:<Register></Register>
     },
     {
      path:'login',
      element:<Login></Login>
     },
     {
      path:'forgot-password',
      element:<ForgotPassword></ForgotPassword>
     }

    ]
  },
]);

export default router;