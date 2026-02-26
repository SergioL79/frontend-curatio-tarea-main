import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";

const router = createBrowserRouter([


    {
    path: "/",
    element: <MainLayout />,
    children:[
        
        {
        index: true,
        element: <h1 className="p-4">inicio</h1>,



        },
        {

        path:"crear-usuario",
        element: <h1 className="p-4">Crear Usuario </h1>,
        },
        {

        path:"medicamentos",
        element: <h1 className="p-4">Medicamentos </h1>,

        },
        {


        path:"ventas",
        element: <h1 className="p-4">Ventas </h1>,
        },

    ]

}  

])

export default router;