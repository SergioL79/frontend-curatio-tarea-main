//useEffect
// useEffect es un hook que permite ejecutar efectos secundarios en componentes
// funcionales.
// un efecto secundario es cualquier operacion que:
// 1- Ocurre fuera del render

// import { useEffect, useState } from "react";

/**
 * 2 -Interactua con el mundo exterior al componente
 * Ejemplos:
 *  - Llamadas a APIs
 * - Manipulacion del DOM
 * - Actualizar un titulo del navegador
 * 
 * 
 * ================================ SINTAXIS=============================
 * useEffect(() => {
 *  efecto *
 * }), []; En los corchetes se colocan el arreglo  las dependencias
 */

//===================== Efecto con array vacio ===========================
// function DeleteUseEffect () {
// //SPA Single Page application
//     const [message,  setMessage] = useState("Cargando...")
// //aqui se coloca el codigo que se ejecta
//     useEffect(() => {


//         setTimeout(() => {
//             setMessage("Se acaba de ejecutar el efecto ")
//         }, 3000);


//     }, []);

//     return (

//         <h1>{message}</h1>

//     );

// };

// export default DeleteUseEffect;



//==========================================================================================================
/**
 * Hook useEffect con una dependencia
 * 
 * Entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 * -useEffect puede ejecutarse otra vez si algo cambia 
 * -Ese algo se declara en el array de dependencias
 * 
*/

import { useEffect, useState } from "react";

function DeleteUserEffect() {

    const [count, setCount] = useState(0);
    const [message,  setMessage] = useState("con dependencias" , count);

    useEffect(() => {
        setMessage(`El contador cambió a ${count}`)


    }, [count]);
    return (

        <>
        <h2>Esto es el contador : {count}</h2>
        <p>{message}</p>

        <button className="border border-border p-3" onClick={() => setCount(count + 1)}>Incrementar </button>
        
        </>
    );

};

export default DeleteUserEffect;


/**
 * IMPORTANTE
 * - Si una dependencia cambia el efecto se ejecuta
 * - Si no cambia el efecto no se ejecuta 
 * 
 */