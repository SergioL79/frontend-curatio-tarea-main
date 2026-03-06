import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import Select from "@/shared/components/Select";
//import selectService from "@/features/users/services/selectService"
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";



export default function UserForm() {
  
  // const handleNameChange = (e) => {

  //   console.log("Nombre del usuario: ", e.target.value)

  // };
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, [])

  const handleEmailBlur = (e) => {
    console.log(`email del usuario: ${e.target.value} `);
  };

  //Validacion Basica
  const handleNameChange = (e) => {

    console.log("Nombre del usuario: ", e.target.value)

    if(e.target.value === "") {
      console.log(`Este  campo no puede estar vacio`)

    }

  };


    const handleButtonSubmit = (e) => {

    console.log("Email del usuario: ", e.target.value)

    if(e.target.value === "") {
      console.log(`Este  campo no puede estar vacio`)

    }

  };
  
  
  
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/*Formulario para crear el usuario */}

      <form className="grid grid-cols-1">
        {/* <Input label="Nombre" placeholder="Ingrese su nombre " /> */}

        {/* <Select
          label="Correo electronico"
          options= {documentTypes}
          name="documentType"
          // placeholder="juan@ejemplo.com"
          // type="email"
          // onBlur={handleEmailBlur}
        >

        </Select> */}
        <Input
          label="Correo electronico"
          placeholder="juan@ejemplo.com"
          type="email"
          onBlur={handleEmailBlur}
        />

      

        {/*Actions */}

        <Input
          label="Contraseña"
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={handleNameChange}
        />

        <div className="flex items-center  justify-center gap-12">
          {/* <Button
            variant="secondary"
            size="sm"
            onClick={() => console.log("Esto es cancelar")}
          >
            Cancelar
          </Button> */}

          <Button
            variant="primary"
            size="md"
            onClick={() => console.log("Esto es Guadar")}
          >
            Iniciar Sesión{" "}
          </Button>

          {/* <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={() => console.log("Esto es Submit")}
            onChange={handleButtonSubmit}
          >
            Tipo onSubmit
          </Button> */}
        </div>
      </form>

      <form className="grid grid-cols-1">
        <h2 className="text-2xl font-bold text-left text-label">Recuperar Contraseña </h2>
        <Input label="Correo" placeholder="Ingrese su correo " />

        <p className="p-4">Por favor ingrese el correo electronico con el que se creo<br />
          el usuario en esta aplicación </p>     

        <div className="flex items-center  justify-center gap-12">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => console.log("Esto es cancelar")}
          >
            Atrás
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => console.log("Esto es Guadar")}
          >
            Enviar Token{" "}
          </Button>

          {/* <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={() => console.log("Esto es Submit")}
            onChange={handleButtonSubmit}
          >
            Tipo onSubmit
          </Button> */}
        </div>
      </form>
    </div>

    
  );
}
