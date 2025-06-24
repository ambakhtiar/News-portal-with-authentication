import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const ForgotPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const [showMessage, setShowMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(null);

        const email = e.target.email.value;
        console.log(email);

        passwordReset(email)
            .then(() => {
                setShowMessage("Password reset email sent! Please Check your eamil.");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control flex flex-col gap-2">
                        <label className="label">
                            <span className="label-text">Register Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6 ">
                        <button className="btn btn-neutral rounded-none">Submit</button>
                    </div>
                </form>
                {showMessage && <div className="text-center mb-2">
                    <p className="py-2">{showMessage} </p>
                    Then, <Link className="font-semibold text-blue-700" to={"/auth/login"}>Login</Link>
                </div>}
                <p className="font-semibold text-center">Don't have an account? <Link to={"/auth/register"} className="text-blue-700">Register</Link></p>
            </div>
        </div>
    );
};

export default ForgotPassword;