import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const { emailLogin, setUser, forgetPassword } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password")
        console.log(email, password)

        emailLogin(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                setUser(user.email)
            })
            .catch(error => {
                console.log(error.code)
            })

        forgetPassword(email)
            .then(() => {
                console.log("password reset email sent")
            })
            .catch(error => {
                console.log(error.code)
            })
    }

    return (
        <div className='lg:w-8/12 w-full mx-auto flex '>
            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div className=" text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className=" p-10">
                                <div className='m-5'>
                                    <label className="label ">Email : </label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                </div>
                                <label className="label">Password : </label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button>Login</button>
                                <div className='m-5'>
                                    <div></div></div>
                                <p>
                                    If you have not account please,
                                    <NavLink to="/registration" className="btn btn-neutral mt-4"> Registation</NavLink>
                                </p>

                                <button onClick={forgetPassword} className="link link-hover">Forgot password?</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;