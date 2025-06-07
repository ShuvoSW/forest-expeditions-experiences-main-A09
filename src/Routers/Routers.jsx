import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Registration from "../Pages/Registration";
import NewsCard from "../Components/NewsCard";
import SignUp from "../Pages/SignUp";
import Explore from "../Pages/Explore";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import NewTab from "./NewTab";

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
                element: <PrivateRouter>
                    <Explore></Explore>
                </PrivateRouter>,
                loader: ({params}) => fetch(`data.json${params.ID}`)
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
    {
        path: "/newTab",
        element: <NewTab></NewTab>
    }
])

export default Routers;