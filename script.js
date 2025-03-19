// Función para obtener una elección aleatoria de la computadora  
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
jugar();  


