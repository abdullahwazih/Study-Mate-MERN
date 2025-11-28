import { createBrowserRouter } from "react-router";
import BaseLayout from "../pages/1_Base/Base_Layout";
import Register from "../pages/2_Reg/Registration";
import Login from "../pages/3_Login/Login_Layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                path: "register",
                Component: Register
            },
            {
                path : "login",
                Component: Login
            }
        ]
    },
]);

export default router;