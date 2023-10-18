// Script utilizado en "Próximas Fechas"
const jsonBandas =`[


 {
    
   "nombre":"Abelardos",
    "imagen":"src=img/invitaciondeAbelardos.jpg",
    "fecha":"10 de diciembre",
    "ubicacion":"San Martin 239, Comodoro Rivadavia",
    "entradas":"San Martin 239"
 

},
 
{
      "nombre":"Aluxinados",
      "imagen":"src=img/invitaciondeAluxinados",
      "fecha":"20 de enero",
      "ubicacion":"San Martin 239, Comodoro Rivadavia",
      "entradas":"San Martin 239"
   
},

 {

   "nombre":"El Descarte",
   "imagen": "src=img/invitaciondeElDescarte",
   "fecha": "1 de octubre",
   "ubicacion": "San Martin 464, Comodoro Rivadavia",
   "entradas":"San Martin 239"

 },


{

   "nombre":"Dios te Salve Vecina",
   "imagen": "src=img/invitaciondeDiosTeSalveVecina",
   "fecha":"11 de marzo",
   "ubicacion":"San Martin 239, Comodoro Rivadavia",
   "entradas": "San Martin 239"

},

 {
   "nombre":"Polifonia",
   "imagen":"img/invitaciondePolifonia",
   "fecha":"8 de julio",
   "ubicacion":"San Martin 239, Comodoro Rivadavia",
   "entradas":"Sarmiento 923"

}
]`

 let jsonConvertido = JSON.parse(jsonBandas)
 console.log(jsonConvertido) 
for (let i = 0; i < jsonConvertido.length; i++) {

let article = document.createElement("article")

let nombre = document.createElement("p")
nombre.innerText =jsonConvertido[i].nombre;
nombre.classList.add("presentacionpf");

let imagen = document.createElement("imagen")
imagen.src = "<img src=img/invitaciondePolifonia>";
imagen.classList.add("invitacion23");

let fecha = document.createElement("fecha")
fecha.innerText = jsonConvertido[i].fecha
fecha.classList.add("presentacionpf");

let ubicacion = document.createElement("ubicacion")
ubicacion.src = jsonConvertido[i].ubicacion;
ubicacion.classList.add("presentacionpf"); 

let entradas = document.createElement("entradas")
entradas.innerText = "Consegui tu entrada en: "+ jsonConvertido[i].entradas
entradas.classList.add("presentacionpf"); 
article.appendChild(nombre);
article.appendChild(imagen);
article.appendChild(fecha);
article.appendChild(ubicacion);
article.appendChild(entradas);

document.getElementById("bandas").appendChild(article);

}