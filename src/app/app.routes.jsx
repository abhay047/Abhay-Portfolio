import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/all-projects",
        element:<AllProjects/>
    }
])