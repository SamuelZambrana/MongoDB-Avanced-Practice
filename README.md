# 📦 Prácticas con MongoDB 🚀  

¡Bienvenido a mi repositorio de prácticas con MongoDB! Aquí encontrarás diferentes ejemplos y ejercicios que he realizado para aprender y dominar esta potente base de datos NoSQL.  

---

## 🔍 **Descripción**  
Este repositorio contiene diversas prácticas realizadas con MongoDB, donde aplicamos conceptos fundamentales como:  
✅ **Consultas básicas** (`find`, `insert`, `update`, `delete`)  
✅ **Uso de operadores avanzados** (`$regex`, `$unset`, `$push`, `$group`)  
✅ **Agregaciones y procesamiento de datos** (`aggregate`, `$match`, `$group`, `$project`)  
✅ **Indexación y optimización de consultas**  
✅ **Relaciones entre documentos y estructuras de datos**  

Cada práctica está documentada con ejemplos y código explicativo para facilitar su comprensión.  

---

## 🛠 **Tecnologías utilizadas**  
| 🚀 Tecnologías | 💻 Descripción |
|---------------|--------------|
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | Base de datos NoSQL orientada a documentos |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lenguaje de programación para escribir consultas |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Entorno de ejecución para conectar MongoDB |
| ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white) | Editor de código utilizado |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) | Framework para construir aplicaciones web con MongoDB |

---

## 📜 **Estructura del repositorio**  
```bash
📂 mongo-practicas
 ├── 📁 scripts          # Scripts con consultas MongoDB
 ├── 📁 datasets         # Archivos JSON con datos de prueba
 ├── 📁 ejemplos         # Ejemplos prácticos de uso
 ├── 📁 agregaciones     # Consultas con aggregation framework
 ├── 📄 README.md        # Este archivo 😃
```

## 📜 **Ejemplo de consulta**  
```bash
db.animales.updateOne(
  { nombre: "Paco" },
  { $push: { historico_vacunas: { tipo: "Rabia Avanzada", fechaVacuna: new Date() } } }
);
```

📖 Cómo usar este repositorio
```bash
git clone https://github.com/SamuelZambrana/MongoDB-Avanced-Practice
```

🏆 Contacto y contribuciones
Si quieres contribuir o mejorar alguna práctica, ¡todo aporte es bienvenido! Puedes:
```bash
Enviar un Pull Request con mejoras.

Compartir ideas en los Issues.

Contactarme en 📧 mi correo: samu-1994@hotmail.es

🛠 ¡Aprendamos juntos y hagamos crecer este repositorio! 🚀
