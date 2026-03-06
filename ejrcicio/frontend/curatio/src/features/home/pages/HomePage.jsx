//página pública

import heroBfg from "@/assets/images/imagen-hero.jpg";
import { products } from "@/data/product/products.js"
import { Card } from "@/shared/components";
import { useState } from "react";
import AvatarUploader from "@/shared/components/AvatarUploader";


export default function HomePage() {

  const [avatarUrl, setAvatarUrl] = useState(null);

  const product = products.find(prod => prod.id === 1);


    return (
      <section
        className="relative min-h-screen w-full flex items-center justify-center text-black"
        style={{
          backgroundImage: `url(${heroBfg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-white/20"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-h1 font-heading ">
            Mis productos
          </h1>
          <div className="
                        grid
                        gap-8
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        justify-items-center"
                        >
            {/*{products.map((product) => (<Card key={product.id} product=
            {product} />))}}*/}

              {product && <Card product={product} />}



          </div>

          

<div className="w-[320px] text-white">
        <AvatarUploader onChange={setAvatarUrl} />

        {avatarUrl && (
          <p className="mt-4 text-sm text-gray-400">
              URL guardada en BD: {avatarUrl}
          </p>
      )}
</div>

      </div>
    </section>
    );

}