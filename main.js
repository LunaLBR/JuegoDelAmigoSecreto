document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const listaAmigos = document.getElementById("lista-amigos");
    const botonSortear = document.getElementById("sortear");
    const resultado = document.getElementById("resultado");

    let amigos = [];

    // Función para actualizar el estado del botón "Sortear"
    function actualizarBotonSortear() {
        if (amigos.length >= 2) {
            botonSortear.disabled = false;
        } else {
            botonSortear.disabled = true;
        }
    }

    // Función para agregar un nombre a la lista
    function agregarNombre() {
        let nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
        } else if (amigos.includes(nombre)) {
            alert("Ese nombre ya está en la lista.");
        } else if (amigos.length >= 7) {
            alert("No puedes agregar más de 7 nombres.");
        } else {
            amigos.push(nombre);
            let li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
            inputNombre.value = "";
            actualizarBotonSortear(); // Actualizar el botón "Sortear"
        }
    }

    // Función para sortear un nombre
    function sortearAmigo() {
        const ganador = amigos[Math.floor(Math.random() * amigos.length)];
        
        // Ocultar la lista de amigos y mostrar el nombre ganador
        listaAmigos.style.display = "none";
        resultado.textContent = `¡El amigo secreto es: ${ganador}!`;

        // Agregar confetti
        confetti({
            particleCount: 100, // Cantidad de partículas
            spread: 70, // Ángulo de dispersión
            origin: { y: 0.6 }, // Ubicación inicial de la animación
            colors: ['#ff66b2', '#ff3385', '#fce4ec', '#f8bbd0'], // Colores del confeti
        });

        // Cambiar el texto del botón a "Reiniciar juego"
        botonSortear.textContent = "Reiniciar juego";
        botonSortear.removeEventListener("click", sortearAmigo); // Eliminar el evento actual
        botonSortear.addEventListener("click", reiniciarJuego); // Añadir el evento de reiniciar
    }

    // Función para reiniciar el juego
    function reiniciarJuego() {
        // Limpiar la lista de amigos y el resultado
        amigos = [];
        listaAmigos.innerHTML = "";
        resultado.textContent = "";
        listaAmigos.style.display = "block"; // Mostrar la lista de amigos

        // Limpiar el campo de entrada
        inputNombre.value = "";

        // Cambiar el texto del botón a "Sortear Amigo"
        botonSortear.textContent = "Sortear Amigo";
        botonSortear.removeEventListener("click", reiniciarJuego); // Eliminar el evento de reiniciar
        botonSortear.addEventListener("click", sortearAmigo); // Añadir el evento de sortear

        // Volver a habilitar el botón de sortear si hay al menos 2 amigos
        actualizarBotonSortear();
    }

    // Asignar los eventos a los botones
    document.getElementById("agregar").addEventListener("click", agregarNombre);
    botonSortear.addEventListener("click", sortearAmigo);
});
