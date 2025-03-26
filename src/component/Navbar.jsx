import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import moment from "moment";
import HadLing from "./hadLing/HadLing";
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
    return (
        <>
        <div className="font-poppins">
        <div className="p-7 ">
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a></a></li>
        <li>
          <a><CiLogout /></a>
          <ul className=" grid">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/Login"}>Login</NavLink>
          <NavLink to={"/Register"} >Registrar</NavLink>
          </ul>
        </li>
        <NavLink to={"/singUp"}>SingUp</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">OVisack Roy</a>
    <p className="bg-orange-200">{moment().format("dddd, MMMM Do YYYY, h:mm: ")}</p>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 font-bold text-2xl text-blue-600">

          <NavLink to={"/"}>Home</NavLink>
     
    <NavLink to={"/Login"}>Login</NavLink>
      
  <NavLink to={"/Register"} >Registrar</NavLink>



   

  <NavLink to={"/singUp"}>SingUp</NavLink>

    </ul>
    
  </div>
  <div className="navbar-end">
    <Link to={"/new"} className="btn">All Data</Link>
  </div>
</div>
        
  
<div className="grid justify-center">

    <HadLing></HadLing>
</div>
  

        </div>
        
        <Outlet></Outlet>
        <Footer ></Footer>
        </div>
        </>
    );
};

export default Navbar;