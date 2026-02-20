import Input from "../../shared/components/Input";
import Select from "../../shared/components/Select";
/*import selectService from "@/features/users/services/selectService";*/
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../users/services/selectService";

export default function UserForm() {
    const [documentTypes, setDocumentTypes] = useState([]);

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[]);

  return (
    <div>
      {/*Formulario para crear el Medicamento*/}

      <form className="grid grid-cols-2">
        {/*DATOS BASICOS */}
        <Input
          label="Id Medicamento"
          placeholder="123456789"
          name="medicationId"
        />

        <Input
          label="Nombre del medicamento"
          placeholder="Paracetamol"
          type="text"
          name="medicationName"
        />

        {/*DATOS DE CONTACTO*/}
        <Input
          label="Forma Farmaceutica"
          placeholder="Tableta"
          name="pharmaceuticalForm"
        />

        <Select
      
        label="Tipo de medicamento"
        name="medicationType"
        options={documentTypes}>
          
          
        </Select>
        
          
        

        <Input
          label="Concentracion"
          placeholder="500 mg"
          type="text"
          name="concentration"
        />

        <Input
          label="Via de administracion"
          placeholder="Oral"
          type="text"
          name="administrationRoute"
        />

        <Input
          label="Laboratorio"
          placeholder="Pfizer"
          type="text"
          name="laboratory"
        />

        {/*DATOS DE FECHAS*/}
        <Input
          label="fecha de fabricacion"
          placeholder="2023-01-01"
          type="date"
          name="manufactureDate"
        />

        <Input
          label="fecha de vencimiento"
          placeholder="2023-12-31"
          type="date"
          name="expirationDate"
        />
      </form>
    </div>
  );
}