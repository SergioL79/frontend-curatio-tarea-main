import Navbar from "@/shared/layout/Navbar";
import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/imagen-hero.jpg";

export default function MainLayout(){

  return(
    <div 
      className="relative min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      {/*filtro*/}

      <div className="absolute inset-0 -z-10 bg-black/40"></div>
      {/* Navbar */}
      <header className="relative z-20">
        <Navbar variant="transparent" />
      </header>
      

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}