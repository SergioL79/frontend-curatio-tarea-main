// useEffect.jsx es un hook que me permite ejeccutar efectos secuendarios en componentes funcionales de React. Es una función que se importa desde la biblioteca de React y se utiliza para manejar efectos secundarios, como la manipulación del DOM, la 
// suscripción a eventos, la realización de solicitudes HTTP, entre otros.
// un efecto secubdario es cualquier operacion que:
//  1- ocurre fuera del render
//  2- interactua con el mundo exterior al componete
// ejemplos:
// -llamadas a APIs
// -manipulacion del DOM
// - actualizacion de un titulo del navegador

// import { use, useEffect, useState } from "react";


//============SINTAXIS BASICA=================
//useEffect(() => {
//  // codigo del efecto        - aqui va el codigo que quiero ejecutar 
//}, [dependencias]);           -en los corchetes se colocan los arreglos de las dependencias

//============Ejemplo con el array vacio=================

// function DeleteUseEffect() {
//     const[message, setMessage] = useState("Cargando...");
//     useEffect(() => {
//         setTimeout(() => {
//             setMessage("Datos cargados");
//         }, 3000);
//     }, []);

//     return (
//         <h1>{message}</h1>
        
//     );



// };

// export default DeleteUseEffect;

//==============Ejemplo con dependencias=================
/**
 * Hook useEffect con dependencia
 * 
 * entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 * - que useEffect puede ejecuarse otra vez si algo cambia
 * - ese algo se declara en el array de dependencias

 */

import { useEffect, useState } from "react";

function DeleteUseEffect(){
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("El contador no ha cambiado");

    useEffect(() => {
        setMessage(`El contador cambia a ${count}`);
    }, [count]);
    return(
        <>
            <h2>{count}</h2>
            <p>{message}</p>

            <button className="border border-border p-2" onClick={() => setCount(count + 1)}>
                    Boton de incremento
                    </button>


        </>

    )

};

export default DeleteUseEffect;

/**
 * Importante:
 * - si una dependencia cambia, el efecto se vuelve a ejecutar
 * - Si no cambia, el efecto no se ejecuta
 * - 
 */