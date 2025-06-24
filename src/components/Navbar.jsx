import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { MdVerified } from 'react-icons/md';
import { TbColumnRemove } from 'react-icons/tb';

const Navbar = () => {
    const { user, logOut, userVerifyEmail } = useContext(AuthContext);
    const [checkMsg, setCheckMsg] = useState(null);

    const handleSendVerificationEmail = () => {
        userVerifyEmail()
            .then(() => {
                setCheckMsg(true);
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='flex justify-between p-2 items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <NavLink to={"/"} className={"btn"}>Home</NavLink>
                <NavLink to={"/career"} className={"btn"}>Career</NavLink>
                <NavLink to={"/about"} className={"btn"}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center ml-2">
                {
                    user && user?.displayName ?
                        <div className='flex items-center gap-2'>
                            {user?.emailVerified && <MdVerified className='text-green-600 text-xl'></MdVerified>}
                            <p className='text-lg lg:text-xl font-bold'>{user?.displayName}</p>
                            {user?.emailVerified ? <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" /> :
                                <div className="relative group">
                                    <button onClick={handleSendVerificationEmail} className="btn p-1 text-xl"><TbColumnRemove className='text-red-600 text-xl'></TbColumnRemove></button>
                                    {checkMsg ?
                                        <p className="absolute top-full left-0 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-900 text-white px-2 py-1 rounded w-32">
                                            Please Check your email. Then Refresh.
                                        </p> :
                                        <p className="absolute top-full left-0 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-900 text-white px-2 py-1 rounded w-32">
                                            Please Verify your email. Click this.
                                        </p>}
                                </div>
                            }
                        </div> :
                        <img src={userIcon} alt="" />
                }
                {
                    user ?
                        <button onClick={logOut} className='btn btn-neutral'>Log Out</button> :
                        <Link to={"/auth/login"} className='btn btn-neutral'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;