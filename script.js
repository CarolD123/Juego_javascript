// Función para obtener una elección aleatoria de la computadora  
/*
function obtenerEleccionComputadora() {  
    // Array que contiene las opciones posibles  
    const opciones = ['piedra', 'papel', 'tijera'];  
    // Genera un índice aleatorio basado en la longitud del array  
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);  
    // Retorna la elección aleatoria de la computadora  
    return opciones[indiceAleatorio];  
}  

// Función para comparar las elecciones del usuario y de la computadora  
function compararEleccion(usuario, computadora) {  
    // Comprueba si hay empate  
    if (usuario === computadora) {  
        return "¡Es un empate!";  
    // Comprueba si el usuario gana  
    } else if (  
        (usuario === 'piedra' && computadora === 'tijera') ||  
        (usuario === 'papel' && computadora === 'piedra') ||  
        (usuario === 'tijera' && computadora === 'papel')  
    ) {  
        return "¡Ganaste!";  
    // Si no hay empate ni ganancia, el usuario pierde  
    } else {  
        return "¡Perdiste!";  
    }  
}  

// Función principal para ejecutar el juego  
function jugar() {  
    // Variable para repetir el juego  
    let jugarNuevamente;  

    // Bucle que permite jugar varias veces  
    do {  
        // Solicita al usuario que elija piedra, papel o tijera  
        const usuario = prompt("Elige: piedra, papel o tijera").toLowerCase();  

        // Validar la elección del usuario  
        // Comprueba si la entrada está vacía o si no es una opción válida  
        if (!usuario || (usuario !== 'piedra' && usuario !== 'papel' && usuario !== 'tijera')) {  
            alert("Entrada inválida. Por favor, elige piedra, papel o tijera.");  
            continue; // Si la entrada no es válida, vuelve al inicio del bucle  
        }  

        // Obtiene la elección aleatoria de la computadora  
        const computadora = obtenerEleccionComputadora();  
        // Muestra la elección de la computadora  
        alert("La computadora eligió: " + computadora);  

        // Compara las elecciones y obtiene el resultado  
        const resultado = compararEleccion(usuario, computadora);  
        // Muestra el resultado del juego  
        alert(resultado);  

        // Pregunta al usuario si quiere jugar nuevamente  
        jugarNuevamente = confirm("¿Quieres jugar de nuevo?");  
    } while (jugarNuevamente); // Se repite mientras el usuario quiera jugar  
}  

// Iniciar el juego llamando a la función jugar  
jugar(); */



/*FUNCIONES 

Las funciones son bloques de código que realizan tareas específicas 
y pueden ser reutilizados en diferentes partes del programa.

CARACTERISTICAS DE FUNCIONES:

Encapsulamiento: Las funciones encapsulan un conjunto de instrucciones, lo que permite aislar la lógica y mejorar la modularidad.

Reutilización: Una vez definida, una función puede ser llamada múltiples veces en el programa sin necesidad de reescribir el mismo código.

Parámetros y Argumentos: Las funciones pueden aceptar parámetros (entradas) que se pasan durante su invocación. Los argumentos son los valores que se proporcionan a esos parámetros.

Valor de Retorno: Las funciones pueden devolver un valor usando la palabra clave return. Si no se especifica un valor de retorno, la función devuelve undefined.

Ámbito: Las variables definidas dentro de una función son locales a esa función, lo que significa que no pueden ser accedidas fuera de ella, a menos que estén definidas como globales.

ESTRUCTURA BASICA DE UNA FUNCION 

function nombreDeLaFuncion(parametro1, parametro2) {  
    // Cuerpo de la función  
    // Código que realiza una tarea  
    return resultado; // Valor devuelto  
    }*/

    //EJEMPLO DE UNA FUNCION

    // Declaración de la función 'sumar' que acepta dos parámetros.  
    /*function sumar(a, b) {  
    return a + b; // Retorna la suma de 'a' y 'b'  
    }  

// Llamada a la función con dos números como argumentos.  
    const resultado = sumar(5, 7);  

// Mostrar el resultado en la consola.  
   console.log("La suma es:", resultado); // La suma es: 12*/



   /*ARREGLOS
   Los arreglos son colecciones de datos que pueden contener elementos de cualquier tipo,
    como números, strings u objetos.

    CARACTERISTICAS DE ARREGLOS

Colección de Elementos: Un arreglo puede contener múltiples elementos, que pueden ser de cualquier tipo de datos: números, strings, objetos, e incluso otros arreglos.

Indexación: Los elementos del arreglo son accesibles mediante un índice numérico, comenzando desde 0. Por ejemplo, el primer elemento está en el índice 0, el segundo en el índice 1, y así sucesivamente.

Tamaño Dinámico: Los arreglos en JavaScript pueden cambiar de tamaño dinámicamente. Puedes agregar o eliminar elementos sin necesidad de especificar un tamaño fijo al crear el arreglo.

Métodos Incorporados: JavaScript proporciona una variedad de métodos incorporados para manipular arreglos, como push(), pop(), shift(), unshift(), map(), filter(), y muchos más.

Homogeneidad y Heterogeneidad: Aunque los arreglos pueden contener elementos del mismo tipo (homogéneos), también pueden contener elementos de diferentes tipos (heterogéneos) en un mismo arreglo.

Ordenado: Los elementos en un arreglo mantienen su orden, y puedes acceder a ellos según su posición indexada.

ESTRUCTURA BASICA DE UN ARREGLO 

const nombreDelArreglo = [elemento1, elemento2, elemento3, ETC..];  

 */

//EJEMPLO DE ARREGLO DE LISTA DE TAREAS 
/*
// Creación de un arreglo para almacenar las tareas  
let tareas = [];  

// Función para agregar una tarea  
function agregarTarea(tarea) {  
    tareas.push(tarea);  
    console.log(`Tarea agregada: "${tarea}"`); // Mensaje de confirmación  
}  

// Función para eliminar una tarea por su índice  
function eliminarTarea(indice) {  
    if (indice >= 0 && indice < tareas.length) {  
        const tareaEliminada = tareas.splice(indice, 1); // Elimina la tarea del arreglo  
        console.log(`Tarea eliminada: "${tareaEliminada[0]}"`); // Mensaje de confirmación  
    } else {  
        console.log("Índice no válido. No se pudo eliminar la tarea.");  
    }  
}  

// Función para mostrar todas las tareas  
function mostrarTareas() {  
    console.log("Lista de Tareas:");  
    for (let i = 0; i < tareas.length; i++) {  
        console.log(`${i + 1}: ${tareas[i]}`); // Imprime cada tarea  
    }  
}  

// Agregando algunas tareas  
agregarTarea("Hacer la compra");  
agregarTarea("Estudiar JavaScript");  
agregarTarea("Hacer ejercicio");  

// Mostrando las tareas actuales  
mostrarTareas(); // Muestra la lista de tareas  

// Eliminando una tarea  
eliminarTarea(1); // Elimina la tarea en el índice 1 (Estudiar JavaScript)  

// Mostrando las tareas después de eliminar  
mostrarTareas(); // Muestra la lista de tareas actualizada */

/*
PROGRAMACION ORIENTADA A OBJETOS
La programación orientada a objetos (POO) organiza el código utilizando "objetos" que contienen propiedades y métodos.

CARACTERISTICAS DE PROGRAMACION ORIENTADA A OBJETOS

Clases y Objetos:

Clase: Es un plano (o plantilla) para crear objetos. Define propiedades (atributos) y métodos (funciones) que esos objetos tendrán.

Objeto: Es una instancia de una clase. Contiene los datos y el comportamiento definido por la clase.

Encapsulamiento: es el principio de ocultar los detalles internos del objeto y exponer solo lo necesario. Se logra a través de propiedades y métodos públicos y privados.

Herencia: permite que una clase (subclase) herede características y comportamientos de otra clase (superclase). Esto promueve la reutilización del código.

Polimorfismo: permite que se puedan usar diferentes clases a través de una interfaz común. Los métodos pueden tener el mismo nombre pero 
comportarse de manera diferente dependiendo de la clase que lo esté utilizando.

Abstracción: permite representar conceptos complejos mediante clases que ocultan los detalles y muestran solo las características esenciales.

ESTRUCTURA BASICA DE LA PROGRAMACION ORIENTADA A OBJETOS

class NombreClase {  
    constructor(parametros) {  
        // Inicialización de propiedades  
    }  

    // Método de la clase  
    metodo() {  
        // Lógica del método  
    }  
}  */

//EJEMPLO DE PROGRAMACION ORIENTADA A OBJETOS CLASE DE PERSONA 
/* En este ejemplo, definiremos una clase Persona que tiene propiedades 
como nombre, edad y métodos para presentar a la persona y celebrar su cumpleaños*/ 

// Definición de la clase 'Persona'  

/*class Persona {  
    // Constructor que inicializa las propiedades de la persona  
    constructor(nombre, edad) {  
        this.nombre = nombre; // Nombre de la persona  
        this.edad = edad;     // Edad de la persona  
    }  

    // Método para presentar a la persona  
    presentarse() {  
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);  
    }  

    // Método para celebrar el cumpleaños  
    cumplirAnos() {  
        this.edad++; // Incrementa la edad en 1  
        console.log(`¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad} años.`);  
    }  
} 

// Creación de instancias (objetos) de la clase 'Persona'  
const persona1 = new Persona("Ana", 28);  
const persona2 = new Persona("Luis", 35);  

// Usando los métodos de los objetos  
persona1.presentarse(); // Hola, mi nombre es Ana y tengo 28 años.  
persona1.cumplirAnos(); // ¡Feliz cumpleaños, Ana! Ahora tienes 29 años.  

persona2.presentarse(); // Hola, mi nombre es Luis y tengo 35 años.  
persona2.cumplirAnos(); // ¡Feliz cumpleaños, Luis! Ahora tienes 36 años.  */

/*Definición de la Clase: Creamos la clase Persona con un constructor que inicializa las propiedades nombre y edad.

presentarse(): Este método imprime en la consola una presentación de la persona, incluyendo su nombre y edad.
cumplirAnos(): Este método incrementa la edad de la persona en 1 y muestra un mensaje de cumpleaños indicando la nueva edad.
Instanciación de Objetos: Creamos dos objetos (persona1 y persona2) de la clase Persona, pasando diferentes valores para nombre y edad.

Uso de Métodos: Se llaman a los métodos presentarse() y cumplirAnos() en los objetos creados para demostrar cómo funcionan. */

/*¿Qué es el DOM (Document Object Model)?
El Document Object Model (DOM) es una interfaz de programación que representa la estructura de un documento HTML 
o XML como un árbol de objetos. Cada elemento, atributo y texto dentro del documento se representa
 como un nodo en este árbol, permitiendo así que lenguajes de programación como JavaScript interactúen 
 con el contenido, la estructura y el estilo de la página web.

¿Para qué sirve el DOM?
Manipulación del Contenido: Permite a los desarrolladores modificar el contenido de la página web en tiempo real.

Interactividad: Facilita la creación de interfaces de usuario interactivas mediante la manipulación dinámica de elementos en respuesta a eventos (como clics, desplazamientos, etc.).

Estructura Dinámica: Permite agregar, eliminar o modificar elementos del documento sobre la marcha, sin necesidad de recargar la página.

CARACTERISTICAS
Estructura Jerárquica: Representa la estructura del documento HTML como un árbol de nodos.
Acceso a Nodos: Permite acceder a elementos específicos usando métodos como getElementById, querySelector, etc.
Manipulación de Estilos: Se puede cambiar el estilo de los elementos a través de la propiedad style.
Escucha de Eventos: Permite agregar escuchadores de eventos para interactuar con los elementos y manejar acciones del usuario.
Compatibilidad: Funciona con varios lenguajes de programación y es un estándar en desarrollo web.*/

//EJEMPLO DEL DOM

/*Este código creará un campo de entrada donde el
 usuario puede escribir su nombre. Al hacer clic en el botón
  "Saludar", se mostrará un saludo en la consola.*/

  /*<!DOCTYPE html>  
<html lang="es">  
<head>  
    <meta charset="UTF-8">  
    <title>Saludo en Consola</title>  
</head>  
<body>  
    <h1>Saludo en Consola</h1>  
    <input type="text" id="nombreInput" placeholder="Escribe tu nombre aquí">  
    <button id="saludarBtn">Saludar</button>  

    <script>  
        // Esperar a que el DOM se cargue completamente  
        document.addEventListener('DOMContentLoaded', function() {  
            // Selección del input y el botón  
            const nombreInput = document.getElementById('nombreInput');  
            const saludarBtn = document.getElementById('saludarBtn');  

            // Función que se ejecutará al hacer clic en el botón  
            saludarBtn.addEventListener('click', function() {  
                const nombre = nombreInput.value.trim(); // Obtener el valor del input  

                // Verificar si el nombre no está vacío  
                if (nombre) {  
                    console.log(`¡Hola, ${nombre}! Bienvenido/a a nuestra página.`); // Imprimir saludo en consola  
                } else {  
                    console.log('Por favor, escribe un nombre.'); // Mensaje si el nombre está vacío  
                }  
                nombreInput.value = ''; // Limpiar el campo de texto  
            });  
        });  
    </script>  
</body>  
</html> */

/*
MODULOS 
Los módulos en JavaScript permiten dividir el código en archivos independientes, mejorando la organización y
 reutilización del código. Se pueden exportar e importar funciones, clases, u objetos entre archivos.

 ¿Para qué sirven?

Facilitan el mantenimiento del código.
Permiten la reutilización de código.
Mejoran la legibilidad.
Evitan la contaminación del espacio global de nombres.

CARACTERISTICAS 
Uso de export para exportar variables, funciones o clases.
Uso de import para traer código desde otro archivo.
Deben ejecutarse en un entorno con soporte para módulos (type="module" en HTML o Node.js).

*/

//EJEMPLO

// Definición de funciones en un módulo 

/*export function sumar(a, b) {  
    return a + b;  
}  

export function restar(a, b) {  
    return a - b;  
}  
import { sumar, restar } from './math.js';  

console.log(sumar(5, 3)); // 8  
console.log(restar(5, 3)); // 2*/  

/*PROGRAMACION ASINCRONA

¿Qué es la programación asíncrona?
La programación asíncrona permite ejecutar operaciones sin bloquear el flujo principal del programa. Se usa para manejar tareas que toman tiempo, como consultas a bases de datos, solicitudes a servidores o temporizadores.

¿Para qué sirve?
Evita que la interfaz de usuario se congele mientras se ejecutan procesos largos.
Permite realizar múltiples tareas simultáneamente.
Mejora el rendimiento en aplicaciones web.
Características de la programación asíncrona en JavaScript:
Uso de setTimeout, setInterval, Promises y async/await.
Permite realizar tareas en segundo plano sin bloquear el flujo principal.
Es común en llamadas a API, lectura de archivos y procesamiento de datos.

EJEMPLO*/

// Simulación de una petición a una API con async/await

/*async function obtenerDatos() {
    console.log("Iniciando solicitud de datos...");

    // Simulación de espera de respuesta (fetch a una API real)
    const respuesta = await new Promise(resolve => 
        setTimeout(() => resolve({ usuario: "Juan", edad: 25 }), 3000)
    );

    console.log("Datos obtenidos:", respuesta);
}

obtenerDatos();
console.log("Este mensaje se muestra antes de obtener los datos.");*/
