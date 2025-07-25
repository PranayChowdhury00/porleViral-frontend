import { useContext, useEffect, useState } from "react";
import { GiClothes } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { HiMiniShoppingCart } from "react-icons/hi2";
import axios from "axios";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [cartItems,setCartItems] = useState(0);
  useEffect(()=>{
   axios.get(`http://localhost:5000/cart/${user?.email}`)
   .then(res=>setCartItems(res.data.length))
   .catch(err=>console.error(err.message))
  },[user?.email])

  const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-800 font-bold underline" : "text-gray-600 font-semibold text-[16px]"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/shirt"
        className={({ isActive }) =>
          isActive ? "text-yellow-800 font-bold underline" : "text-gray-600 font-semibold text-[16px]"
        }
      >
        Shirts
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/t-shirt"
        className={({ isActive }) =>
          isActive ? "text-yellow-800 font-bold underline" : "text-gray-600 font-semibold text-[16px]"
        }
      >
        T-Shirts
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pants"
        className={({ isActive }) =>
          isActive ? "text-yellow-800 font-bold underline" : "text-gray-600 font-semibold text-[16px]"
        }
      >
        Pants
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-800 font-bold underline" : "text-gray-600 font-semibold text-[16px]"
        }
      >
        ContactUs
      </NavLink>
    </li>
  </>
);


  return (
    <div className="sticky top-0 z-50 bg-[#fbdd02] shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="navbar h-[95px]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="btn shadow-none text-[24px] bg-transparent border-none"
            >
              <GiClothes /> PorleViral
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/cart">
              <div className="relative mr-5">
                <HiMiniShoppingCart className="w-10 h-8 text-gray-700 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">
                  {cartItems>0 ? cartItems:0}
                </span>
              </div>
            </Link>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="profile"
                    src={
                      user?.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {user ? (
                  <>
                    <li>
                      <a className="justify-between">
                        {user.displayName || "Profile"}
                      </a>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <a onClick={signOutUser}>Logout</a>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
