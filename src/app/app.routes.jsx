import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/contact-me",
        element:<Contact/>
    }
])