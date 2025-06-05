import React from 'react';
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className=''>
      <div className="navbar bg-base-100  shadow-sm flex justify-between w-10/12 mx-auto p-5 ">
        <div className="navbar-start">
          <div className="dropdown">
          </div>
          <img src={logo} alt="" />
        </div>
        <div className=' '>
          <NavLink to="/" >Home</NavLink>
          <NavLink className="m-10">Update</NavLink>
          <NavLink >Profile</NavLink>
        </div>
        <div className="navbar-end ">
          <NavLink to="/signup" className="btn ml-8">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;