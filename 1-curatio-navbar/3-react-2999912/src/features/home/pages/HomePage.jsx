// Página pública
import heroBg from "@/assets/images/imagen-hero.jpg";

export default function HomePage(){
return(
    <section 
        className="relative min-h-screen w-full flex items-center justify-center text-black" 
    style={
        { 
            backgroundImage: `url(${heroBg})`,  
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }
    }

    
    >
        <div className="absolute inset-0 bg-white/30"></div>

        <div className="relative z-10 text-center">
            <h1 className="text-h1 font-heading">
                Bienvenido a Curatio
                <p className="text-body">
                    Tu plataforma de salud personalizada, no moriras tan pronto!!
                </p>
            </h1>
        </div>

    </section>
)
}   