/**
 * useEffect
 * useEffect es un hook que permite ejecutar efectos secundarios en componentes
 *  1- Ocurre fuera del render
 *  2- Interactua con el mundo exterior al componente
 * Ejemplos:
 *  - Llamadas a APIs
 *  - Manipulación del DOM
 *  - Actualizar un título del navegador
 * 
 * 
 *  ======= SINTAXIS ======
 * useEffect(() =>{
 *      efecto      - Código que se ejecuta
 * },[]);          - En los corchetes se colocan el arreglo dependencias* 
 * 
 * 
 *  */
// import { useEffect, useState } from "react";

// // ====== Efecto con array vacio =======

// function DeleteUseEffect () {

//     const [message, setMessage] = useState("Cargando...")

//     useEffect(()=> {
//         setTimeout(() => {
//             setMessage("Se acaba de ejecutar el efecto...")
//         }, 0);
//     },[]);

//     return (
//         <h1>{message}</h1>
//     );
// };

// export default DeleteUseEffect;


//===============================================================

/**
 * Hook useEffect con una dependencia
 * 
 * Entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 * - useEffect puede ejecutarse otra vez si algo cambia
 * - Ese algo se declara en el array de dependencias * 
 */

import { useEffect, useState } from "react";

function DeleteUserEffect(){
    const [ count, setCount] = useState(0);
    const [ message, setMessage] = useState("El contador No ha combiado");

    useEffect(() => {
        setMessage(`El contador cambió a ${count}`)
    },[count]);

    return(
        <>
            <h2>{count}</h2>
            <p>{message}</p>

            <button className="border border-border p-2" onClick={() => setCount(count + 1)}>
                Botón de Incremento
            </button>

        </>
    );
};

export default DeleteUserEffect;

/**
 * IMPORTANTE
 * - Si una dependencia cambia el efecto se ejecuta
 * - Si no cambia el efecto No se ejecuta 
 */