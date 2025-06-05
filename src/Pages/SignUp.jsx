import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='lg:w-8/12 w-full mx-auto flex '>
            <div className="hero  ">
  <div className="hero-content flex-col ">
    <div className=" text-center lg:text-left">
      <h1 className="text-5xl font-bold ">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset p-10">
          <div className='m-5'>
            <label className="label ">Email : </label>
          <input type="email" className="input" placeholder="Email" />
          
          </div>
          
          <label className="label">Password : </label>
          <input type="password" className="input" placeholder="Password" />
           <div className='m-5'>
               
          <div><a className="link link-hover">Forgot password?</a></div></div>

                    <p>
            If you have not account please,
             <NavLink to="/registration" className="btn btn-neutral mt-4"> Registation</NavLink>
          </p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;