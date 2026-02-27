import Navbar from "@/shared/layout/Navbar";
import { Outlet, useLocation } from "react-router-dom";


export default function MainLayout(){
/**
 * useLocation es un hook de react-router que te da acceso al objeto location el cual contiene informacion de la URL actual:
 * pathname: la ruta actual(/home, etc)
 * 
 */
  const location = useLocation();

  const isHome = location.pathname === "/";

  return(
    /**
     * navbar transparente solo en el home,
     * si la ruta es exactamente esta, entonces el navbar es transparente, de lo contrario es solido
     */
    <div className="min-h-screen text-text-primary"> 

      {/* Navbar */}
      
        <Navbar variant={isHome ? "transparent" : "solid"} />

      <main className={`flex-1 ${isHome ? "" : "p-4"}`}>
        <Outlet />
      </main>
    </div>
  );
}