import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, userVerifyEmail, setUser, user, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        let hasError = false;

        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 6) {
            setError(prev => ({ ...prev, name: "Name must be more than 5 characters long" }));
            hasError = true;
        } else {
            setError(prev => ({ ...prev, name: null }));
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if (password.length < 6) {
            setError(prev => ({ ...prev, password: "Password must be more than 5 characters long" }));
            hasError = true;
        } else {
            setError(prev => ({ ...prev, password: null }));
        }

        // console.log({ name, photo, email, password }, error.name, error.password);

        if (hasError) return;

        createNewUser(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(error => {
                        // console.log(error);
                    });

            })
            .catch(err => {
                setError(prev => ({ ...prev, firebase: err.message }));
            });

    }

    const handleForgotPassword = () => {
        navigate("/auth/forgot-password");
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control flex flex-col gap-2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
                    </div>
                    {
                        error.name ?
                            <label className="label text-red-500">
                                {error.name}
                            </label> :
                            <label className="label text-red-500">
                                {""}
                            </label>
                    }
                    <div className="form-control flex flex-col gap-2">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <label className="label">
                            <a onClick={handleForgotPassword} className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {/* {
                        user && (user?.emailVerified ? <Navigate to={"/"}></Navigate> :
                            <label className="label font-bold">
                                Please Verify your email.
                            </label>)
                    } */}
                    {
                        error.password ?
                            <label className="label text-red-500">
                                {error.password}
                            </label> :
                            <label className="label text-red-500">
                                {""}
                            </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    {
                        error.firebase &&
                        <label className="label text-red-500">
                            {error.firebase}
                        </label>
                    }
                </form>
                <p className="font-semibold text-center">Allready have an account? <Link to={"/auth/login"} className="text-blue-700">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;