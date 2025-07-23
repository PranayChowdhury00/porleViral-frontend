import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/LoginRegister/Register";
import Login from "../pages/LoginRegister/Login";
import ForgotPassword from "../pages/LoginRegister/ForgotPassword";
import Banner from "../pages/Home/Banner";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/Home/ProductDetails";
import Checkout from "../pages/Cart/Checkout";
import PrivacyPolicy from "../pages/PrivecyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/PrivecyPolicy/TermsAndConditions";
import RefundPolicy from "../pages/PrivecyPolicy/RefundPolicy";

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
     },
     {
     path:'/cart',
     element:<PrivateRoute>
      <Cart></Cart>
     </PrivateRoute>
     },
     {
      path:'product/:productId',
      element:<PrivateRoute>
       <ProductDetails></ProductDetails>
      </PrivateRoute>
     },
     {
      path:'/checkout',
      element:<PrivateRoute>
       <Checkout></Checkout>
      </PrivateRoute>
     },
     {
      path:'/privacy',
      element:<PrivacyPolicy></PrivacyPolicy>
     },
     {
      path:'/terms',
      element:<TermsAndConditions></TermsAndConditions>
     },
     {
      path:'/refund',
      element:<RefundPolicy></RefundPolicy>
     }

    ]
  },
]);

export default router;