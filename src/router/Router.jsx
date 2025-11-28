import { createBrowserRouter } from "react-router";
import BaseLayout from "../pages/1_Base/Base_Layout";
import Register from "../pages/2_Reg/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                path: "register",
                Component: Register
            }
        ]
    },
]);

export default router;