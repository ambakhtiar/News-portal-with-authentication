import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <div className="bg-[#f3f3f3] h-24 font-JetBrains">
                <header className="py-3 w-11/12 mx-auto">
                    <Navbar></Navbar>
                </header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;