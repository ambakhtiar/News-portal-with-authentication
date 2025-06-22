import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="">
            <p className="font-semibold mb-3">Login With</p>
            <div className="*:w-full space-y-2">
                <button className="btn">
                    <FcGoogle /> Login with Google
                </button>
                <button className="btn">
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;