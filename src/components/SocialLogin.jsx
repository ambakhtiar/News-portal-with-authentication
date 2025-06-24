import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdVerified } from "react-icons/md";
import { TbColumnRemove } from "react-icons/tb";

const SocialLogin = () => {
    const { userLogInWithGoogle, userLogInWithGitHub, user, updateUserProfile } = useContext(AuthContext);
    const [btnShow, setBtnShow] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnShow(false);

        let name = e.target.name.value;
        let photo = e.target.photo.value;

        console.log(user.displayName, user.photoURL, name, photo);
        if (name == '') name = user.displayName;
        if (photo == '') photo = user.photoURL;
        console.log(name, photo);

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                alert("Please Refresh !");
            })
            .catch(error => {
                // console.log(error);
            });
    }

    const parts = user?.email?.split("@");

    return (
        <div className="">
            {
                user ?
                    <div className="border border-black p-2 rounded">
                        <p className="font-semibold mb-3">User Information</p>
                        <div className="*:w-full space-y-2">
                            <p className="">Name: <span className="font-semibold">{user?.displayName}</span></p>
                            {
                                user?.email && (user?.email?.length < 25 ?
                                    <p className="">Email:
                                        <span className="font-semibold">{user?.email}</span></p> :
                                    <p className="">Email:
                                        <span className="font-semibold">{parts[0]} @{parts[1]} </span></p>)
                            }
                        </div>

                        <button onClick={() => setBtnShow(true)} className={`${btnShow ? "hidden" : "block"} btn btn-neutral mt-4`}>Change profile info</button>
                        <form onSubmit={handleSubmit} className={`${btnShow ? "block" : "hidden"} card-body p-0 mt-4 space-y-2`}>
                            <div className="form-control flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photoURL" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6 ">
                                <button className="btn btn-neutral rounded">Change Profile</button>
                            </div>
                        </form>
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