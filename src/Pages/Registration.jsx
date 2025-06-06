import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
  
  const {googleLogin,setUser} = useContext(AuthContext)

  
const location = useLocation();
const navigate = useNavigate();


  const handleSubmit = (e) => {


    
    e.preventDefault();
  
     const form = new FormData(e.target)
     const name = form.get("name")
     console.log(name)


  

     
  }

  const google = () => {
       googleLogin()
     .then((result) => {
      setUser(result.user.photoURL);
      console.log(result)
      navigate(location?.state ? location.state : "/")
     })
     .catch((error) => {
      console.log(error.code)
     })
  }

  return (
    <div className='lg:w-8/12 w-full mx-auto'>
      <div className="hero  ">
        <div className="hero-content flex-col ">
          <div className=" text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className=" p-10">
                <div className='m-5'>
                  <label className="label ">Name : </label>
                  <input type="text" name='name' className="input" placeholder="Email" />
                </div>
                <div className='m-5'>
                  <label className="label ">Photo Url : </label>
                  <input type="image" name='photo' className="input" placeholder="Email" />
                </div>
                <div className='m-5'>
                  <label className="label ">Email : </label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                </div>
                <label className="label">Password : </label>
                <input type="password" name='password' className="input" placeholder="Password" />

                        <button className=" flex btn btn-neutral rounded-none mt-4">Register</button>
                <div className='m-5'>
                  <div><a className="link link-hover">Forgot password?</a></div></div>
                <div className='flex justify-center'>
                  <button onClick={google}>Google</button>
                </div>
                <p>
                  If you have an account please,
                  <NavLink to="/signup" className="btn btn-neutral mt-4"> Login</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;