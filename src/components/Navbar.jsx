import { GiClothes } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

 const links = <>
  <li className="font-semibold text-gray-600"><NavLink to='/'>Home</NavLink></li>
   <li className="font-semibold text-gray-600"><NavLink to='/shirt'>Shirts</NavLink></li>
   <li className="font-semibold text-gray-600"><NavLink to='/t-shirt'>T-Shirts</NavLink></li>
   <li className="font-semibold text-gray-600"><NavLink to='/pant'>Pants</NavLink></li>
 </>

 return (
  <div className="">
   <div className="navbar bg-[#fbdd02] shadow-sm h-[95px] sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link  to='/' className="btn text-xl bg-transparent  border-none">
     <GiClothes /> PorleViral
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile"
            src="" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  </div>
 );
};

export default Navbar;