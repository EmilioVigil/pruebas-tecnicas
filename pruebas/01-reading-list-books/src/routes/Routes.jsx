import { createBrowserRouter } from "react-router-dom";

// Components
import { Landing } from "../components/Landing/Landing";
import { Home } from "../components/home/Home";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/home',
        element: <Home />
    }

])