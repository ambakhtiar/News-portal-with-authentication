import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between p-2 items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <NavLink to={"/"} className={"btn"}>Home</NavLink>
                <NavLink to={"/career"} className={"btn"}>Career</NavLink>
                <NavLink to={"/about"} className={"btn"}>About</NavLink>
            </div>
            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <Link to={"/auth/login"} className='btn btn-neutral'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;