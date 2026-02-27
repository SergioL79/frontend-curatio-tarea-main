
import { Outlet } from "react-router-dom";
import   authbg  from "@/assets/images/11-auth-background.jpg";
import UserForm from "@/features/users/components/UserForm";


export default function AuthLayout(){
return(
    <div 
        className="relative min-h-screen w-full flex items-center 
        justify-center text-black" 
            style={
                { 
                    backgroundImage: `url(${authbg})`,  
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }
            } 
>

    {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        

    <main className="w-full max-w-md">
        {/* <Outlet /> */}
        <UserForm />
    </main>
    </div>
);
};
