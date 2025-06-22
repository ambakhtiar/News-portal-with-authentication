import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LaftNavbar from "../components/layout-content/LaftNavbar";
import RightNavbar from "../components/layout-content/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-JetBrains">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-4">
                <aside className="col-span-3">
                    <LaftNavbar></LaftNavbar>
                </aside>
                <main className="col-span-6">
                    <Outlet></Outlet>
                </main>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;