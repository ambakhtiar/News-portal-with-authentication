import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2">
            <div><img className="w-80" src={logo} alt="" /></div>
            <p className="text-gray-400">Journalism without fear or favor</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;