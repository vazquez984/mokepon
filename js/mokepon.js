let ataqueSeleccionado;
let mascotaJugadorSeleccionada = false;
let vidasJugador = 3;
let vidasEnemigo = 3;

// Función para mostrar u ocultar el historial
function toggleHistorial() {
    const contenidoHistorial = document.getElementById("contenido-historial");
    contenidoHistorial.style.display = (contenidoHistorial.style.display === "none" || contenidoHistorial.style.display === "") 
        ? "block" 
        : "none";
}

function iniciarJuego() {
    document.getElementById("seleccionar-ataque").style.display = "none";

    document.getElementById("boton-mascota").addEventListener("click", seleccionarMascotaJugador);
    document.getElementById("boton-fuego").addEventListener("click", () => seleccionarAtaque("Fuego 🔥"));
    document.getElementById("boton-agua").addEventListener("click", () => seleccionarAtaque("Agua 💧"));
    document.getElementById("boton-planta").addEventListener("click", () => seleccionarAtaque("Planta 🌱"));
    document.getElementById("boton-reiniciar").addEventListener("click", reiniciarJuego);

    document.getElementById("historial-titulo").addEventListener("click", toggleHistorial); // Agregamos el evento para el historial

    actualizarVidas();
}

function seleccionarMascotaJugador() {
    const mascotaSeleccionada = document.querySelector('input[name="mascota"]:checked');

    if (!mascotaSeleccionada) {
        mostrarMensaje("No has seleccionado ninguna mascota");
        return;
    }

    const nombresMascotas = {
        "hipodoge": "Hipodoge 🐕",
        "capipepo": "Capipepo 🐼",
        "ratigueya": "Ratigueya 🐭",
        "langostelvis": "Langostelvis 🦞",
        "tucapalma": "Tucapalma 🦜",
        "pydos": "Pydos 🦎"
    };

    document.getElementById("mascota-seleccionada").innerHTML = nombresMascotas[mascotaSeleccionada.id];

    const enemigoSeleccionado = obtenerMascotaAleatoria(nombresMascotas);
    document.getElementById("enemigo-seleccionado").innerHTML = nombresMascotas[enemigoSeleccionado];

    mostrarMensaje(`Has seleccionado a ${nombresMascotas[mascotaSeleccionada.id]} y tu enemigo es ${nombresMascotas[enemigoSeleccionado]}`);

    mascotaJugadorSeleccionada = true;
    document.getElementById("seleccionar-mascotas").style.display = "none";
    document.getElementById("seleccionar-ataque").style.display = "block";
}

function obtenerMascotaAleatoria(mascotas) {
    const keys = Object.keys(mascotas);
    return keys[Math.floor(Math.random() * keys.length)];
}

function ataqueAleatorioEnemigo() {
    const ataques = ["Fuego 🔥", "Agua 💧", "Planta 🌱"];
    return ataques[Math.floor(Math.random() * ataques.length)];
}

function determinarResultado(ataqueJugador, ataqueEnemigo) {
    const reglas = {
        "Fuego 🔥": "Planta 🌱",
        "Agua 💧": "Fuego 🔥",
        "Planta 🌱": "Agua 💧"
    };

    if (ataqueJugador === ataqueEnemigo) {
        return "Empate 🤝";
    } else if (reglas[ataqueJugador] === ataqueEnemigo) {
        vidasEnemigo--;
        return "Ganaste 🎉";
    } else {
        vidasJugador--;
        return "Perdiste 😢";
    }
}

function seleccionarAtaque(tipoAtaque) {
    const ataqueEnemigo = ataqueAleatorioEnemigo();
    const resultado = determinarResultado(tipoAtaque, ataqueEnemigo);

    mostrarMensaje(`Tu mascota ataca con ${tipoAtaque} y el enemigo ataca con ${ataqueEnemigo}. ${resultado}`);
    actualizarVidas();
    verificarFinDelJuego();

    // Agregar el resultado de la ronda al historial
    agregarHistorial(`Ataque: ${tipoAtaque} | Enemigo: ${ataqueEnemigo} | Resultado: ${resultado}`);
}

function actualizarVidas() {
    document.getElementById("vidas-jugador").textContent = vidasJugador;
    document.getElementById("vidas-enemigo").textContent = vidasEnemigo;
}

function verificarFinDelJuego() {
    if (vidasJugador === 0) {
        mostrarMensaje("¡Has perdido el juego! 😢");
        deshabilitarAtaques();
    } else if (vidasEnemigo === 0) {
        mostrarMensaje("¡Has ganado el juego! 🎉");
        deshabilitarAtaques();
    }
}

function deshabilitarAtaques() {
    document.getElementById("boton-fuego").disabled = true;
    document.getElementById("boton-agua").disabled = true;
    document.getElementById("boton-planta").disabled = true;
}

function reiniciarJuego() {
    mostrarMensaje("Reiniciando el juego");
    window.location.reload();
}

function mostrarMensaje(mensaje) {
    document.getElementById("resultado-ronda").textContent = mensaje;
}

function agregarHistorial(mensaje) {
    const historialDiv = document.getElementById("contenido-historial");
    const nuevoMensaje = document.createElement("p");
    nuevoMensaje.textContent = mensaje;
    historialDiv.appendChild(nuevoMensaje);  // Añadimos el mensaje al historial
}

window.addEventListener("load", iniciarJuego);
