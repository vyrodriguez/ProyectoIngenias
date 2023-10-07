
const jsonBandas = `[ 
  {
      "nombre": "abelardos",
      "imagen": "img/invitaciondeabelardos.jpg",
      "fecha": "10 de diciembre",
      "ubicacion": "San Martin 239, Comodoro Rivadavia",
      "entradas": "calle san martin 239"
  },
  {
      "nombre": "aluxinados",
      "imagen": "img/invitaciondealuxinados.jpg",
      "fecha": "20 de enero",
      "ubicacion": "San Martin 239, Comodoro Rivadavia",
      "entradas": "calle san martin 239"
  },
  {
      "nombre": "el descarte",
      "imagen": "img/invitaciondeeldescarte.jpg",
      "fecha": "1 de octubre",
      "ubicacion": "San Martin 464, Comodoro Rivadavia",
      "entradas": "Calle San Martin 239"
  },
  {
      "nombre": "Dios te Salve Vecina",
      "imagen": "img/invitaciondediostesalve.jpg",
      "fecha": "11 de marzo",
      "ubicacion": "San Martin 239, Comodoro Rivadavia",
      "entradas": "San Martin 239"
  },
  {
      "nombre": "Polifonia",
      "imagen": "img/invitaciondepolifonia.jpg",
      "fecha": "8 de julio",
      "ubicacion": "San Martin 239, Comodoro Rivadavia",
      "entradas": "Sarmiento 923"
  }
]`;

let jsonConvertido = JSON.parse(jsonBandas);

for (let i = 0; i < jsonConvertido.length; i++) {
  let article = document.createElement("article");

  let nombre = document.createElement("p");
  nombre.innerText = "Nombre: " + jsonConvertido[i].nombre;
  nombre.classList.add("presentacionpf");

  let imagen = document.createElement("img");
  imagen.src = jsonConvertido[i].imagen;
  imagen.classList.add("invitacion23");


  let fecha = document.createElement("p");
  fecha.innerText = "Fecha: " + jsonConvertido[i].fecha;
  fecha.classList.add("presentacionpf");

  let ubicacion = document.createElement("p");
  ubicacion.innerText = "Ubicación: " + jsonConvertido[i].ubicacion;
  ubicacion.classList.add("presentacionpf");

  let entradas = document.createElement("p");
  entradas.innerText = "Entradas: " + jsonConvertido[i].entradas;
 entradas.classList.add("presentacionpf");

  article.appendChild(nombre);
  article.appendChild(imagen);
  article.appendChild(fecha);
  article.appendChild(ubicacion);
  article.appendChild(entradas);

  document.getElementById("bandas").appendChild(article);
}