import { createBrowserRouter } from "react-router-dom";
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
import Contact from "../pages/Contact/Contact";
import Shirts from "../pages/Shirts/Shirts";
import ProductDetails2 from "../pages/Shirts/ProductDetails2";
import TShirts from "../pages/TShirts/TShirts";
import Pants from "../pages/Pants/Pants";
import Page404 from "../pages/Page404/Page404";

const router = createBrowserRouter([
 {
  path:'*',
  element:<Page404></Page404>
 } ,
 {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/refund",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path: "/shirt",
        element: <Shirts></Shirts>,
      },
      {
        path: "/product/:category/:id",
        element: (
          <PrivateRoute>
            <ProductDetails2></ProductDetails2>
          </PrivateRoute>
        ),
      },
      {
       path:'/t-shirt',
       element:<TShirts></TShirts>
      },
      {
       path:"/pants",
       element:<Pants></Pants>
      }
    ],
  },
]);

export default router;
