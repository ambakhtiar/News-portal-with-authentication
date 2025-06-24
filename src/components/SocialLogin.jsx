import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdVerified } from "react-icons/md";
import { TbColumnRemove } from "react-icons/tb";

const SocialLogin = () => {
    const { userLogInWithGoogle, userLogInWithGitHub, user } = useContext(AuthContext);

    const handleLogInWithGoogle = () => {
        userLogInWithGoogle()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogInWithGitHub = () => {
        userLogInWithGitHub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const parts = user?.email?.split("@");

    return (
        <div className="">
            {
                user ?
                    <div>
                        <p className="font-semibold mb-3">User Information</p>
                        <div className="*:w-full space-y-2">
                            <p className="">Name: <span className="font-semibold">{user?.displayName}</span></p>
                            {
                                user?.email && (user?.email?.length < 20 ?
                                    <p className="">Email:
                                        <span className="font-semibold">{user?.email}</span></p> :
                                    <p className="">Email:
                                        <span className="font-semibold">{parts[0]} {parts[1]} </span></p>)
                            }
                        </div>
                    </div> :
                    <div>
                        <p className="font-semibold mb-3">Login With</p>
                        <div className="*:w-full space-y-2">
                            <button onClick={handleLogInWithGoogle} className="btn">
                                <FcGoogle /> Login with Google
                            </button>
                            <button onClick={handleLogInWithGitHub} className="btn">
                                <FaGithub /> Login with Github
                            </button>
                        </div>
                    </div>
            }
        </div >
    );
};

export default SocialLogin;