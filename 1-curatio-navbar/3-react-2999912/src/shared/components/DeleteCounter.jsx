// Hook useState

// import { useState } from "react";

// export default function DeleteCounter(){
//     // count es el valor actual de estado
//     // setCount es la función para actualizar
//     // useState() es el valor inicial
//     const [count, setCount] = useState(0)

//     return(
//         <div>
//             <p>Counter:{count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
                
//     );    
// };


// =====================================================================
// ================================CONTADOR ============================
// =====================================================================


export default function DeleteCounter(){

    let count = 0;

    const incrementar = () => {
        count = count + 1;
        console.log("El nuevo valor es:", count);
    }
    return(
        <>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>Incrementars</button>
        </>
    );
};

// 1- React solo actuliza la interfaz cuando cambia el estado useState
// 2- La UI en este último ejemplo deja de actulizarse por que No estamos llamando a setCount, que es mecanismo que le indica a react que debe  re-rendirizar.
// 3- Cada vez que llamamos a setCount, le estamos diciendo a React el estado debe actulizarse y el componente debe volver a renderizarse.