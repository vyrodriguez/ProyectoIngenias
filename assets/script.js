
const jsonBandas =`[


 {
    
   "nombre":"abelardos",
    "imagen":"src=img/invitaciondeabelardos.jpg",
    "fecha":"10 de diciembre",
    "ubicacion":"San Martin 239, Comodoro Rivadavia",
    "entradas":"calle san martin 239"
 

},
 
{
      "nombre":"aluxinados",
      "imagen":"src=img/invitaciondealuxinados",
      "fecha":"20 de enero",
      "ubicacion":"San Martin 239, Comodoro Rivadavia",
      "entradas":"calle san martin 239"
   
},

 {

   "nombre":"el descarte",
   "imagen": "src=img/invitaciondeeldescarte",
   "fecha": "1 de octubre",
   "ubicacion": "San Martin 464, Comodoro Rivadavia",
   "entradas":"Calle San Martin 239"

 },


{

   "nombre":"Dios te Salve Vecina",
   "imagen": "src=img/invitaciondediostesalve",
   "fecha":"11 de marzo",
   "ubicacion":"San Martin 239, Comodoro Rivadavia",
   "entradas": "San Martin 239"

},

 {
   "nombre":"Polifonia",
   "imagen":"src=img/invitciondepolifonia",
   "fecha":"8 de julio",
   "ubicacion":"San Martin 239, Comodoro Rivadavia",
   "entradas":"Sarmiento 923"

}
]`

 let jsonConvertido = JSON.parse(jsonBandas)
 console.log(jsonConvertido) 
for (let i = 0; i <jsonConvertido.letgh;i++){
}
let article = document.createElement("article")

let nombre = document.createElement("nombre")
nombre.innerText = jsonConvertido[i].nombre

let imagen = document.createElement("imagen")
imagen.scr = jsonConvertido[i].imagen

let fecha = document.createElement("fecha")
fecha.innerText = jsonConvertido[i].fecha

let ubicacion = document.createElement("ubicacion")
ubicacion.scr = jsonConvertido[i].ubicacion 

let entradas = document.createElement("entradas")
entradas.innerText = jsonConvertido[i].entradas