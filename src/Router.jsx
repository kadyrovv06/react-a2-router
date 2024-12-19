import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact "
import About from "./pages/About";
import Layout from "./components/Layout/Layout";
import Userinfo from "./pages/userinfo";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "contract",
                element: <Contact/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "userinfo/:id",
                element: <Userinfo/>
            }
        ]
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/about",
        element: <About />
    }
])