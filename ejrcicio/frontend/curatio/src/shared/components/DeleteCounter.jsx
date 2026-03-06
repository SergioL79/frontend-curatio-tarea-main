//Hook UseState

// import { useState } from "react";

// export default function DeleteCounter() {
//   //count es el valor actual del estado
//   //setCount es la funccion para actualizar
//   //useState() es el valor inicial

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Incrementar</button>
//     </div>
//   );
//  }

//==============================================================================
//===========================CONTADOR===========================================
//==============================================================================

export default function DeleteCounter() {
  let count = 0;
  const incrementar = () => {
    count +=  1;
    console.log("El nuevo valor es:", this.count);
  };
  return (
    <>
      {" "}
      <p>Contador : {count}</p>{" "}
      <button onClick={incrementar}>Incrementarse</button>{" "}
    </>
  );
}

// 1- React actualiza la interfaz cuando cambia el estado UseState
// 2- La UI en este ultimo ejemplo deja de actualizarse porque no estamos llamando a setCount, que es mecanismo que le indica a react que de
//re-enderizar.
// 3- Cada vez que llamamos a setCount, le estamos diciendo a REact que el estado debe de actuliazar y el componente debe de volver a renderizarse
