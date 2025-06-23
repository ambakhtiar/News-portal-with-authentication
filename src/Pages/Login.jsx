import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError({ ...error, login: err.code });
            });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control flex flex-col gap-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex flex-col gap-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && <label className="label text-red-500">
                                {error.login}
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Don't have an account? <Link to={"/auth/register"} className="text-blue-700">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;