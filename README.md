# 🎯 RuletaApp

**RuletaApp** es una aplicación web interactiva donde puedes escribir hasta 12 tareas, retos, decisiones o actividades... ¡y dejar que la ruleta elija una por vos! Ideal para momentos de ocio, dinámicas con amigos, o simplemente para decidir entre opciones sin pensarlo demasiado.

---

## 🧩 ¿Qué puedes hacer con RuletaApp?

- 📋 Crear y gestionar hasta **12 ítems** personalizados.
- 🔄 Girar una **ruleta animada** que elige aleatoriamente uno de ellos.
- 💾 Tus ítems se guardan en **LocalStorage** (no se pierden al cerrar la página).
- 🗑️ Puedes **agregar o eliminar** ítems en cualquier momento.
- ✅ ¡No es necesario completar los 12 para empezar a girar!

---

## 🎡 ¿Cómo funciona la lógica de la ruleta?

La ruleta está construida con React y CSS, sin librerías externas. Al hacer clic en "Girar":

- Se selecciona aleatoriamente un ítem de la lista.
- Se calcula el ángulo exacto para que ese ítem quede en la parte superior.
- Se aplica una animación suave con `transform` y `transition` para simular el giro.
- La ruleta se sincroniza con el estado global mediante Context API, lo que permite que los cambios en la lista se reflejen automáticamente.

Cada ítem se representa como un segmento rotado y deformado visualmente con `skewY`, creando el efecto de rueda dividida.

---

## 🚀 ¿Por qué la hice?

Desarrollé esta app como un desafío personal para:

- Practicar React y manipulación de datos sin backend.
- Mejorar experiencia de usuario con transiciones y diseño responsivo.
- Demostrar habilidades en desarrollo web moderno usando buenas prácticas.

---

## 📦 Tecnologías usadas

- ⚛️ React.js (con Vite)
- 🟨 JavaScript ES6+
- 💠 HTML5 + CSS3 (responsive design)
- 🧠 LocalStorage
- 🎨 Animaciones y Transiciones en CSS
- 📦 Deploy en Netlify

---

## 💻 ¿Dónde probarla?

👉 [**Ir a la app web en Netlify**](https://ruleta-de-decisiones.netlify.app/)

---

## 🛠 Cómo clonar y correr el proyecto

```bash
git clone https://github.com/CarlosZubilete/Ruleta/tree/main
cd ruleta-app
npm install
npm run dev
```

## 📁 Estructura del proyecto

```
/src
 ├── components/
 ├── context/
 ├── styles/
 ├── assets/
 └── App.jsx

```

**Dependencias**

- "bootstrap": "5.3.7",
- "formik": "2.4.6",
- "react": "19.0.0",
- "react-dom": "19.0.0",
- "react-icons": "^5.5.0",
- "react-router": "7.7.1",
- "react-router-dom": "7.7.1",
- "reactstrap": "9.2.3",
- "yup": "1.6.1"

---

## 🧠 Nota importante

⚠️ **LocalStorage** se utiliza para mantener persistente la lista de tareas, pero no está pensado para guardar información sensible como contraseñas, datos personales o privados.

⭐ **Licencia**
Este proyecto está bajo licencia MIT. Libre para aprender, modificar y compartir.

---
