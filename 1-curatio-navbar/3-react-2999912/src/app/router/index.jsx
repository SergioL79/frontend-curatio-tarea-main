import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";
import ProfilePage from "../../features/users/pages/ProfilePage";
import HomePage from "../../features/home/pages/HomePage";
import AuthLayout from "@/shared/layout/AuthLayout";

const router = createBrowserRouter([

    {
        
        element:<MainLayout/>,
        children: [
            {
                path: "/",
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
        ],
    },
        {
            
        element:<AuthLayout/>,
        children: [
            {
                path: "login",
                element: <HomePage />
            },
            {
                path:"forgot-password",
                element: <h1 className="p-4">Recuperar contraseña</h1>
            },
            {
                path:"reset-password",
                element: <h1 className="p-4">Resetar mi contraseña</h1>
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





