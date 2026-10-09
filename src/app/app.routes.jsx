import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/contact-me",
        element:<Contact/>
    },
    {
        path:"/all-projects",
        element:<Projects/>
    }
])