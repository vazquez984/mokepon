# Mokepon 🔥💧🌱

Mokepon es un pequeño juego basado en web donde puedes seleccionar una mascota y enfrentarla contra un enemigo en una batalla. Cada jugador tiene vidas, y las mascotas pueden atacar usando tres tipos de ataques: Fuego, Agua y Planta. ¡El objetivo es reducir las vidas del enemigo a cero para ganar!

## 🚀 Descripción del Proyecto

Este juego es una práctica divertida para aplicar conocimientos de HTML, CSS y JavaScript. El usuario selecciona su mascota y luego puede atacar usando uno de los tres elementos. El juego utiliza lógica de combate para determinar el ganador de cada ronda y muestra el resultado en pantalla. También se incluye un historial de rondas que el usuario puede consultar o colapsar según prefiera.

## 📋 Características del Juego

- Selección de diferentes mascotas para el jugador y el enemigo.
- Tres tipos de ataques: Fuego 🔥, Agua 💧 y Planta 🌱.
- Sistema de vidas para el jugador y el enemigo.
- Lógica de combate elemental:
  - Fuego vence a Planta.
  - Agua vence a Fuego.
  - Planta vence a Agua.
- Un historial colapsable que muestra los resultados de las rondas anteriores.
- Responsivo y **mobile-friendly**.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del contenido del juego.
- **CSS3**: Estilización del juego, incluyendo el diseño responsive para dispositivos móviles.
- **JavaScript (Vanilla)**: Lógica del juego, gestión de eventos, actualizaciones en tiempo real de los resultados y manejo del DOM.

## 📂 Estructura del Proyecto

\`\`\`bash
mokepon/
│
├── css/
│   └── styles.css            # Estilos del juego
├── js/
│   └── mokepon.js            # Lógica del juego
├── mokepon.html                # Estructura principal del juego
└── README.md                 # Documentación del proyecto
\`\`\`

## 🚀 Cómo Jugar

1. **Selecciona tu mascota**:
   - Al abrir el juego, puedes elegir entre diferentes mascotas: Hipodoge 🐕, Capipepo 🐼, Ratigueya 🐭, Langostelvis 🦞, Tucapalma 🦜 o Pydos 🦎.
   - Una vez seleccionada la mascota, el enemigo seleccionará la suya automáticamente.
  
2. **Elige tu ataque**:
   - Puedes atacar con Fuego 🔥, Agua 💧 o Planta 🌱.
   - El enemigo atacará con un ataque aleatorio.

3. **Gana el juego**:
   - Cada vez que ambos ataques son seleccionados, se mostrará el resultado de la ronda:
     - Fuego vence a Planta.
     - Agua vence a Fuego.
     - Planta vence a Agua.
   - El primer jugador en reducir las vidas del enemigo a cero, gana el juego.

4. **Consulta el historial**:
   - Puedes ver el historial de todas las rondas anteriores haciendo clic en el título "Historial de Rondas". El historial se puede colapsar si no quieres verlo.

5. **Reinicia el juego**:
   - Puedes reiniciar el juego en cualquier momento haciendo clic en el botón de "Reiniciar juego".

## 📦 Instalación y Uso

No es necesaria una instalación compleja. Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   \`\`\`bash
   git clone https://github.com/vazquez984/mokepon.git
   \`\`\`
   
2. **Navega al directorio del proyecto**:
   \`\`\`bash
   cd mokepon
   \`\`\`

3. **Abre el archivo \`index.html\` en tu navegador**:
   - Puedes abrir el archivo \`index.html\` directamente en un navegador.
   - O también puedes usar una extensión como **Live Server** en VSCode para visualizar el juego de manera local.

## 📱 Diseño Responsivo

Este proyecto está diseñado para adaptarse a diferentes dispositivos, desde ordenadores de escritorio hasta teléfonos móviles. La estructura cambia según el tamaño de la pantalla, asegurando que los jugadores puedan disfrutar del juego en cualquier dispositivo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres mejorar el juego, solucionar un problema o agregar nuevas funciones:

1. Realiza un fork del proyecto.
2. Crea una rama para tu nueva función (\`git checkout -b nueva-funcion\`).
3. Haz commit de tus cambios (\`git commit -m 'Añadir nueva función'\`).
4. Realiza un push a la rama (\`git push origin nueva-funcion\`).
5. Abre un pull request.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar más detalles en el archivo [LICENSE](LICENSE).

## 👨‍💻 Autor

- **Antonio Vazquez** - [@vazquez984](https://github.com/vazquez984)
"""

# Saving this content to a README.md file
with open('/mnt/data/README.md', 'w') as file:
    file.write(readme_content)

