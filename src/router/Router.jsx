import { createBrowserRouter } from "react-router";
import BaseLayout from "../pages/1_Base/Base_Layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,  
    },
]);

export default router;