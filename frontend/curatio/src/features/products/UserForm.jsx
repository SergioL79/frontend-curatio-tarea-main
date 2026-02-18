import Input from "../../shared/components/Input";

export default function UserForm() {
  return (
    <div>
      {/*Formulario para crear el Medicamento*/}

      <form>
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

        <Input
          label="Presentacion"
          placeholder="Caja de 20 tabletas"
          type="text"
          name="presentation"
        />

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