import React, { useContext } from 'react';
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => { 

  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  


  // const handleLogoutClick = () => {
  //   handleLogout()
  //   .then(() =>{
  //     console.log("Logout successful");
  //   })
  //   .catch((error) => {
  //     confirm.log("ERROR",error)
  //   })
  // }

  return (
    <div className=''>
      <div className="navbar bg-base-100  shadow-sm flex justify-between w-10/12 mx-auto p-5 ">
        <div className="navbar-start">
          <div className="dropdown">
          </div>
          <img src={logo} alt="" />
        </div>
        <div className=' flex justify-center items-center'>
          <NavLink to="/" >Home</NavLink>
          <NavLink className="m-10">Update</NavLink>
          <NavLink>
             
             {
              user ? 
              <div>
                {/* <img className="rounded-full w-[70%]" src={user} />  */}
              <p>{user}</p>
              </div>: "Profile"
             }
          </NavLink>
        </div>
        <div className="navbar-end ">
          <NavLink to="/signup" className="btn ml-8">Login </NavLink>
          <button onClick={logOut}>Logout</button>
          <NavLink to="/newTab"> new tab</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;