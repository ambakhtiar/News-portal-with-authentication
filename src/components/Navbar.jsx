import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='flex justify-between p-2 items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <NavLink to={"/"} className={"btn"}>Home</NavLink>
                <NavLink to={"/career"} className={"btn"}>Career</NavLink>
                <NavLink to={"/about"} className={"btn"}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                {
                    user && user.displayName ?
                        <div className='flex items-center gap-2'>
                            <p className='text-xl font-bold'>{user?.displayName}</p>
                            <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />
                        </div> :
                        <img src={userIcon} alt="" />
                }
                {
                    user && user?.email ?
                        <button onClick={logOut} className='btn btn-neutral'>Log Out</button> :
                        <Link to={"/auth/login"} className='btn btn-neutral'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;