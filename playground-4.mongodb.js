
// Select the database to use.
use('Tienda');

/*
db.moviles.insertMany(
    [
      {
        "nombre": "Smartphone",
        "marca": "Samsung",
        "modelo": "Galaxy S22",
        "precio": 800,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.5,
            "resolucion": "QHD+"
          },
          "sistemaOperativo": "Android",
          "almacenamientoInterno": "128GB",
          "camaras": [
            { "tipo": "Principal", "resolucion": "48MP" },
            { "tipo": "Frontal", "resolucion": "20MP" }
          ],
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Azul", "Blanco"],
        "opiniones": [
          {
            "usuario": "user789",
            "puntuacion": 4.5,
            "comentario": "Gran calidad de la cámara"
          },
          {
            "usuario": "mobilelover",
            "puntuacion": 5,
            "comentario": "Excelente rendimiento y duración de batería"
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Apple",
        "modelo": "iPhone 13",
        "precio": 1000,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.1,
            "resolucion": "Liquid Retina HD"
          },
          "sistemaOperativo": "iOS",
          "almacenamientoInterno": "256GB",
          "camaras": [
            { "tipo": "Principal", "resolucion": "12MP" },
            { "tipo": "Frontal", "resolucion": "12MP" }
          ],
          "bateria": "3046mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco", "Verde"],
        "opiniones": [
          {
            "usuario": "applefan",
            "puntuacion": 4.8,
            "comentario": "Increíble rendimiento y calidad de construcción."
          },
          {
            "usuario": "techgeek",
            "puntuacion": 4.5,
            "comentario": "El ecosistema de Apple hace que valga la pena cada centavo."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Google",
        "modelo": "Pixel 6",
        "precio": 900,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.3,
            "resolucion": "OLED"
          },
          "sistemaOperativo": "Android",
          "almacenamientoInterno": "128GB",
          "camaras": [
            { "tipo": "Principal", "resolucion": "12.2MP" },
            { "tipo": "Frontal", "resolucion": "8MP" }
          ],
          "bateria": "3700mAh"
        },
        "coloresDisponibles": ["Negro", "Plata"],
        "opiniones": [
          {
            "usuario": "androidlover",
            "puntuacion": 4.6,
            "comentario": "El software de Google ofrece una experiencia excepcional."
          },
          {
            "usuario": "techguru",
            "puntuacion": 4.4,
            "comentario": "Cámara de calidad y rendimiento fluido."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "OnePlus",
        "modelo": "9 Pro",
        "precio": 850,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.78,
            "resolucion": "Fluid AMOLED"
          },
          "sistemaOperativo": "Android",
          "almacenamientoInterno": "256GB",
          "camaras": [
            { "tipo": "Principal", "resolucion": "48MP" },
            { "tipo": "Frontal", "resolucion": "16MP" }
          ],
          "bateria": "4510mAh"
        },
        "coloresDisponibles": ["Negro", "Plata"],
        "opiniones": [
          {
            "usuario": "onepluslover",
            "puntuacion": 4.7,
            "comentario": "Increíble relación calidad-precio y rendimiento."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.5,
            "comentario": "OxygenOS proporciona una experiencia suave y personalizable."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Xiaomi",
        "modelo": "Mi 11",
        "precio": 700,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.67,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "Android",
          "almacenamientoInterno": "256GB",
          "camaras": [
            { "tipo": "Principal", "resolucion": "108MP" },
            { "tipo": "Frontal", "resolucion": "20MP" }
          ],
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Azul", "Gris"],
        "opiniones": [
          {
            "usuario": "miuser",
            "puntuacion": 4.6,
            "comentario": "Increíble cámara y rendimiento a un precio asequible."
          },
          {
            "usuario": "techlover",
            "puntuacion": 4.4,
            "comentario": "MIUI ofrece muchas características útiles."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Apple",
        "modelo": "iPhone 14",
        "precio": 1199,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.1,
            "resolucion": "Super Retina XDR"
          },
          "sistemaOperativo": "iOS 16",
          "almacenamientoInterno": "256GB",
          "RAM": "6GB",
          "camara": { "principal": "12MP", "frontal": "12MP" },
          "bateria": "3095mAh"
        },
        "coloresDisponibles": ["Gris espacial", "Oro", "Plata"],
        "opiniones": [
          {
            "usuario": "applefan",
            "puntuacion": 4.9,
            "comentario": "Diseño premium y rendimiento excepcional."
          },
          {
            "usuario": "techreviewer",
            "puntuacion": 4.7,
            "comentario": "Cámara increíble y duración de la batería mejorada."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Samsung",
        "modelo": "Galaxy S23",
        "precio": 1199,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.8,
            "resolucion": "Quad HD+"
          },
          "sistemaOperativo": "One UI 4.0",
          "almacenamientoInterno": "512GB",
          "RAM": "12GB",
          "camara": { "principal": "108MP", "frontal": "40MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco", "Verde"],
        "opiniones": [
          {
            "usuario": "samsunglover",
            "puntuacion": 4.8,
            "comentario": "Diseño elegante y funciones innovadoras."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.6,
            "comentario": "Excelente rendimiento y cámara versátil."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Xiaomi",
        "modelo": "Mi 12",
        "precio": 1099,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.81,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "MIUI 14",
          "almacenamientoInterno": "512GB",
          "RAM": "16GB",
          "camara": { "principal": "200MP", "frontal": "32MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco", "Azul"],
        "opiniones": [
          {
            "usuario": "miuser",
            "puntuacion": 4.9,
            "comentario": "Increíble potencia y calidad de la cámara."
          },
          {
            "usuario": "techlover",
            "puntuacion": 4.7,
            "comentario": "Pantalla impresionante y rendimiento rápido."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "OnePlus",
        "modelo": "10 Pro",
        "precio": 999,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.7,
            "resolucion": "QHD+"
          },
          "sistemaOperativo": "OxygenOS 12",
          "almacenamientoInterno": "256GB",
          "RAM": "12GB",
          "camara": { "principal": "108MP", "frontal": "32MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Plata"],
        "opiniones": [
          {
            "usuario": "oneplusfan",
            "puntuacion": 4.8,
            "comentario": "Diseño elegante y potente rendimiento."
          },
          {
            "usuario": "techreviewer",
            "puntuacion": 4.6,
            "comentario": "Cámara impresionante y experiencia de usuario fluida."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Google",
        "modelo": "Pixel 7",
        "precio": 899,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.4,
            "resolucion": "FHD+"
          },
          "sistemaOperativo": "Android 12",
          "almacenamientoInterno": "128GB",
          "RAM": "8GB",
          "camara": { "principal": "50MP", "frontal": "8MP" },
          "bateria": "4614mAh"
        },
        "coloresDisponibles": ["Blanco", "Negro", "Verde"],
        "opiniones": [
          {
            "usuario": "pixellover",
            "puntuacion": 4.7,
            "comentario": "Experiencia Android pura y cámara impresionante."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.5,
            "comentario": "Rendimiento sólido y actualizaciones rápidas."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "LG",
        "modelo": "G9",
        "precio": 799,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.8,
            "resolucion": "OLED"
          },
          "sistemaOperativo": "Android 10",
          "almacenamientoInterno": "128GB",
          "RAM": "8GB",
          "camara": { "principal": "48MP", "frontal": "16MP" },
          "bateria": "4300mAh"
        },
        "coloresDisponibles": ["Gris", "Blanco", "Verde"],
        "opiniones": [
          {
            "usuario": "lglover",
            "puntuacion": 4.6,
            "comentario": "Diseño elegante y experiencia de usuario intuitiva."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.4,
            "comentario": "Cámara versátil y pantalla vibrante."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "ASUS",
        "modelo": "ROG Phone 5",
        "precio": 999,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.78,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "ROG UI (basado en Android 11)",
          "almacenamientoInterno": "512GB",
          "RAM": "16GB",
          "camara": { "principal": "64MP", "frontal": "24MP" },
          "bateria": "6000mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco"],
        "opiniones": [
          {
            "usuario": "roglover",
            "puntuacion": 4.9,
            "comentario": "Potente para juegos y duración de la batería impresionante."
          },
          {
            "usuario": "gamingenthusiast",
            "puntuacion": 4.7,
            "comentario": "Diseño robusto y altavoces estéreo excepcionales."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Motorola",
        "modelo": "Edge 30 Pro",
        "precio": 899,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.7,
            "resolucion": "OLED"
          },
          "sistemaOperativo": "Android 11",
          "almacenamientoInterno": "256GB",
          "RAM": "12GB",
          "camara": { "principal": "108MP", "frontal": "32MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Gris", "Azul", "Burdeos"],
        "opiniones": [
          {
            "usuario": "motorolafan",
            "puntuacion": 4.8,
            "comentario": "Excelente relación calidad-precio y batería duradera."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.6,
            "comentario": "Diseño atractivo y rendimiento sólido."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Huawei",
        "modelo": "P50 Pro",
        "precio": 1099,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.6,
            "resolucion": "OLED"
          },
          "sistemaOperativo": "HarmonyOS 2.0",
          "almacenamientoInterno": "256GB",
          "RAM": "8GB",
          "camara": { "principal": "50MP", "frontal": "32MP" },
          "bateria": "4360mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco", "Oro"],
        "opiniones": [
          {
            "usuario": "huaweilover",
            "puntuacion": 4.7,
            "comentario": "Cámara excepcional y rendimiento suave."
          },
          {
            "usuario": "techreviewer",
            "puntuacion": 4.5,
            "comentario": "Diseño premium y calidad de construcción."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Sony",
        "modelo": "Xperia 2",
        "precio": 999,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.1,
            "resolucion": "FHD+"
          },
          "sistemaOperativo": "Android 11",
          "almacenamientoInterno": "256GB",
          "RAM": "8GB",
          "camara": { "principal": "12MP", "frontal": "8MP" },
          "bateria": "4500mAh"
        },
        "coloresDisponibles": ["Negro", "Verde", "Rosa"],
        "opiniones": [
          {
            "usuario": "sonylover",
            "puntuacion": 4.6,
            "comentario": "Diseño elegante y funciones multimedia impresionantes."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.4,
            "comentario": "Rendimiento sólido y experiencia de usuario intuitiva."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Lenovo",
        "modelo": "Legion Phone 3",
        "precio": 899,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.92,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "ZUI 13 (basado en Android 12)",
          "almacenamientoInterno": "512GB",
          "RAM": "18GB",
          "camara": { "principal": "64MP", "frontal": "44MP" },
          "bateria": "5500mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco"],
        "opiniones": [
          {
            "usuario": "lenovolover",
            "puntuacion": 4.7,
            "comentario": "Excelente para juegos y diseño innovador."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.5,
            "comentario": "Rendimiento potente y batería de larga duración."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Vivo",
        "modelo": "X90",
        "precio": 999,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.78,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "OriginOS (basado en Android 12)",
          "almacenamientoInterno": "512GB",
          "RAM": "12GB",
          "camara": { "principal": "50MP", "frontal": "32MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Azul", "Gris"],
        "opiniones": [
          {
            "usuario": "vivolover",
            "puntuacion": 4.8,
            "comentario": "Excelente rendimiento y diseño atractivo."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.6,
            "comentario": "Pantalla vibrante y carga rápida."
          }
        ]
      },
      {
        "nombre": "Smartphone",
        "marca": "Oppo",
        "modelo": "Find X5",
        "precio": 899,
        "especificaciones": {
          "pantalla": {
            "tamaño": 6.7,
            "resolucion": "AMOLED"
          },
          "sistemaOperativo": "ColorOS 13 (basado en Android 12)",
          "almacenamientoInterno": "256GB",
          "RAM": "12GB",
          "camara": { "principal": "50MP", "frontal": "32MP" },
          "bateria": "5000mAh"
        },
        "coloresDisponibles": ["Negro", "Blanco", "Azul"],
        "opiniones": [
          {
            "usuario": "oppolover",
            "puntuacion": 4.7,
            "comentario": "Diseño premium y experiencia de usuario fluida."
          },
          {
            "usuario": "techenthusiast",
            "puntuacion": 4.5,
            "comentario": "Rendimiento sólido y carga rápida."
          }
        ]
      }
    ]
    
    );
 */

// Encuentra todos los productos con un precio mayor a 1000.

db.moviles.find(
  { precio: { $gt: 1000 } },
);

// Obtén todos los productos de la marca "Samsung" y que tenga 3 colores disponibles.

db.moviles.find(
  { marca: "Samsung", 
    coloresDisponibles: { $size: 3 } },
);

// Obtener la marca y modelo de los productos que tengan una cámara frontal con una resolución de 20MP

db.moviles.find(
  { "especificaciones.camaras": { $elemMatch: { tipo: "Frontal", resolucion: "20MP" } } },
  { marca: 1, modelo: 1, id: 0 }
);

// Obtener la cantidad de Iphone que hay en la coleccion.

db.moviles.find(
  { marca: "Apple" },
).count();


// Ver el tiempo de ejecución  de una query

db.usuarios.find({ nombre: "user1500001" }).explain("executionStats")
  .executionStats.executionTimeMillis;

// Crear un index para reducir los tiempos a la hora de ejecutar la query

db.usuarios.createIndex({ nombre: -1 });

// ^ -> Para encontrar los valores que empiezan por dicho string

db.moviles.find({
  modelo: { $regex: "^Find" },
});

// Buscar un string en una cadena

db.moviles.find({
  "especificaciones.sistemaOperativo": { $regex: "android", $options: "i" },
});

// $ -> Para encontrar los valores que terminan por dicho string

db.moviles.find({
  "especificaciones.sistemaOperativo": { $regex: "2.0$" },
});

//OPERADORES DE ACTUALIZACIÓN
// $set -> Actualizar un valor
// db.moviles.updateOne({ marca: 'Oppo'},{ $set: { modelo: "Find X56"} });
// $inc -> Incrementar un valor
// db.moviles.updateMany({ marca: 'Oppo' },{ $inc: { precio: 1} });
// $push -> Agregar un valor a un array
// db.moviles.updateMany({ marca: 'Oppo' },{ $push: { coloresDisponibles: "verde"} });
// $pull -> Quitar valores a un array

// db.moviles.updateMany({ marca: 'Oppo' },{ $pull: { coloresDisponibles: "verde"} });

db.moviles.find();

// Obtener todos los productos que tengan 12GB de RAM y color Azul

db.moviles.find(
  { "especificaciones.RAM": "12GB", coloresDisponibles: "Azul" },
  { marca: 1, modelo: 1, _id: 0 }
);
// Obtener un listado con todos los comentarios que sean por encima o igual del 4.9
db.moviles.find(
  {
    "opiniones.puntuacion": { $gte: 4.9}
  },
  {
    "opiniones.comentario": 1, "opiniones.puntuacion": 1, _id: 0
  }
)

// aggregate() -> Te permite hacer consultas complejas y potetenes
// $match -> Para buscar en nuestra colecction (igual que un find)
// $project -> Proyectar la información
db.moviles.aggregate(
  [
    {
      $match: {
        marca: "Oppo"
      }
    },
    {
      $project: {
        marca: 1,
        modelo: 1,
        coloresDisponibles: 1
      }
    }
  ]
);

// $unwind -> Descompone un array dentro de un documento, 
// y crea un nuevo documento por cada elemento del array
db.moviles.aggregate(
  [
    {
      $unwind: "$opiniones"
    },
    {
      $match: {
        "opiniones.puntuacion": { $gte: 4.9}
      }
    },
    {
      $project: {
        "opiniones.comentario": 1,
        _id: 0
      }
    }
  ]
);
// $group -> se compone siempre de
              // _id -> Donde le indicamos por lo que queremos agrupar
              // nombre_campo le indicamos el calculo que queremos hacer
// $sum - para hacer sumas
db.moviles.aggregate(
  [
    {
      $unwind: "$coloresDisponibles"
    },
    {
      $group: {
        _id: "$coloresDisponibles",
        cantidad: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        color : "$_id",
        cantidad: 1
      }
    }
  ]
);
// $avg -> Para calcular la media
// Calcular la media de precio por marca.
// $sort -> Para ordenadr los valores, 1 de menos a mayor, y -1 de mayor a menor
// $limit -> Para limitar la cantidad de valores que va a devolver
db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      media: { $avg: "$precio"}
    }
  }, 
  {
    $project: {
      _id: 0,
      media: 1,
      marca: "$_id"
    }
  }, 
  {
    $sort: { media: 1 }
  },
  {
    $limit: 1
  }
]);

// $cond -> Para hacer una condición
db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      media: { $avg: "$precio"}
    }
  }, 
  {
    $project: {
      _id: 0,
      marca: "$_id",
      categoria: {
        $cond: {
          if: { $gt: ["$media", 800 ]},
          then: "Caro",
          else: "Barato"
        }
      }
    }
  }
]);