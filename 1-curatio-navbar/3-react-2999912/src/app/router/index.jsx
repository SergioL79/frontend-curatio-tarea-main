import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";
import ProfilePage from "../../features/users/pages/ProfilePage";
import { Home } from "lucide-react";
import HomePage from "../../features/home/pages/HomePage";

const router = createBrowserRouter([

    {
        path: "/",
        element:<MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:"cursos",
                element: <h1 className="p-4">Cursos</h1>
            },
            {
                path:"contacto",
                element: <h1 className="p-4">Contacto</h1>
            },
            {
                path:"videos",
                element: <h1 className="p-4">Vídeos</h1>
            },

            {
                path:"perfil",
                element: <ProfilePage />
            },
        ]
        
    }
]);

export default router;





