# 🎁 Amigo Secreto

## 📌 Descripción del Proyecto
Este proyecto es una aplicación web que permite a los usuarios agregar nombres a una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

En este proyecto decidí agregar el reto de crear mi propia página de **HTML y CSS** de forma sencilla. En mi lógica, decidí que los nombres ingresados se almacenaran en un **array (lista)**. Implementé validaciones para manejar diferentes situaciones, como:

- Evitar agregar un nombre en blanco.
- Prevenir nombres duplicados.
- Limitar la entrada a **7 nombres**, según las instrucciones.
- Deshabilitar el botón de sorteo hasta que haya al menos **2 nombres**, asegurando un sorteo justo (50/50 de probabilidad mínima).
- Tras el sorteo, cambiar el botón a "Reiniciar juego" y limpiar la celda del input.
- Agregué una **biblioteca de JavaScript** para usar **confeti 🎉** y destacar el momento en que se revela el ganador.

---

## 🚀 Funcionalidades
- **Agregar nombres** ➕: Los usuarios pueden ingresar un nombre en un campo de texto y añadirlo a la lista pulsando el botón "Adicionar".
- **Validar entrada** ✅: Se muestran alertas si el usuario intenta agregar un nombre vacío, duplicado o si se supera el límite de 7 nombres.
- **Visualizar la lista** 📋: Los nombres ingresados aparecen en una lista visible en la página.
- **Sorteo aleatorio** 🎲: Al hacer clic en "Sortear Amigo", se elige aleatoriamente un nombre de la lista y se muestra en pantalla con un efecto especial.
- **Reiniciar el juego** 🔄: Tras el sorteo, el botón cambia a "Reiniciar juego" para comenzar de nuevo.

---

## 🛠 Lógica Implementada en JavaScript
La aplicación utiliza **JavaScript** para gestionar la lógica del juego. Algunos aspectos clave:
- Se almacenan los nombres en un **array**.
- Se valida la entrada del usuario para evitar errores.
- Se actualiza dinámicamente la interfaz para reflejar los cambios.
- Se usa `Math.random()` para seleccionar un nombre aleatorio.
- Se incorpora **confeti 🎊** para resaltar el resultado del sorteo.
- Se permite **reiniciar el juego**, limpiando la lista y restaurando el botón de sorteo.

---

## 📂 Repositorio en GitHub
Este proyecto fue gestionado con **Git y GitHub**:
1. Se inicializó un repositorio con:
   ```bash
   git init
   ```
2. Se añadió un archivo `README.md` y otros archivos necesarios con:
   ```bash
   git add .
   ```
3. Se realizaron **commits** con mensajes descriptivos:
   ```bash
   git commit -m "Mensaje"
   ```
4. Se vinculó el repositorio remoto con:
   ```bash
   git remote add origin <URL del repositorio>
   ```
5. Se subieron los cambios a GitHub con:
   ```bash
   git push -u origin main
   ```

---

## 🖥 Tecnologías Utilizadas
- **HTML** 🏗: Para la estructura de la página.
- **CSS** 🎨: Para el diseño y estilos visuales.
- **JavaScript** ⚡: Para la interactividad y la lógica del sorteo.
- **Git & GitHub** 🔄: Para el control de versiones y alojamiento del código.
- **Librería de Confeti** 🎊: Para mejorar la experiencia visual.

---

## 📌 Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
   ```
2. Abre el archivo `index.html` en un navegador.
3. Agrega nombres, sortea y diviértete con el juego del **Amigo Secreto**. 🎁🎉

---

Si tienes dudas o quieres mejorar el proyecto, **¡puedes contribuir en GitHub!** 🚀


