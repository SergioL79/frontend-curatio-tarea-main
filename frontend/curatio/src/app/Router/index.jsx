import {createBrowserRouter} from "react-router-dom";
import MainLayaut from "@/shared/layouts/MainLayaut";
const router = createBrowserRouter([


    {
    path: "/",
    element: <MainLayaut />,
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