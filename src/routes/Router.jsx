import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Pages/CAtegoryNews";
import AuthLayout from "../layout/AuthLayout";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path: "news",
        element: <h1>News....</h1>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <h1>Login....</h1>
            },
            {
                path: "/auth/register",
                element: <h1>Register....</h1>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default Router;