import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Registration from "../Pages/Registration";
import NewsCard from "../Components/NewsCard";
import SignUp from "../Pages/SignUp";
import Explore from "../Pages/Explore";
import ErrorPage from "../ErrorPage/ErrorPage";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "/",
                element: <NewsCard></NewsCard>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/explore",
                element: <Explore></Explore>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>

    }
])

export default Routers;