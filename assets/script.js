// Script utilizado en "Próximas Fechas"
const jsonBandas =`[


 {
    
   "nombre":"ABELARDOS",
    "imagen":"img/invitaciondeAbelardos.jpg",
    "texto":"¿Te vas a perder este gran espetaculo de Los Abelardos?. El dia 10 de Diciembre a partir de las 21hs. Las entradas las podes conseguir en Locura, calle San Martin 239.",
    "entradas":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5169894843402!2d-67.48020795983558!3d-45.86096533540754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455dccbff05e5%3A0xacd53d87b9e5ae9c!2sEl%20S%C3%B3tano%20Pub!5e0!3m2!1ses!2sar!4v1690571830527!5m2!1ses!2sar"
 

},
 
{
      "nombre":"ALUXINADOS",
      "imagen":"img/invitaciondeAluxinados.jpg",
      "texto":"No te pierdas el gran espetaculo de Aluxinados, con sus canciones bien rockeras para pasar una noche diferente. El dia 20 de enero desde las 21hs. Las entradas las podes conseguir en calle San Martin 239.",
      "entradas":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5169894843402!2d-67.48020795983558!3d-45.86096533540754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455dccbff05e5%3A0xacd53d87b9e5ae9c!2sEl%20S%C3%B3tano%20Pub!5e0!3m2!1ses!2sar!4v1690571830527!5m2!1ses!2sar"
   
},

 {

   "nombre":"EL DESCARTE",
   "imagen": "img/invitaciondeElDescarte.jpg",
   "texto": "¡No te podes perder este gran atributo a Los Redondos! El dia sabado 1 de Octubre desde las 00hs. Las entradas las podes conseguir en calle San Martin 464.",
   "entradas":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5169894843402!2d-67.48020795983558!3d-45.86096533540754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455dccbff05e5%3A0xacd53d87b9e5ae9c!2sEl%20S%C3%B3tano%20Pub!5e0!3m2!1ses!2sar!4v1690571830527!5m2!1ses!2sar"

 },


{

   "nombre":"DIOS TE SALVE VECINA",
   "imagen": "img/invitaciondediostesalve.jpg",
   "texto":"¡No te podes perder este show de Dios te Salve Vecina festejando sus 6 años! Se presentan el dia 11 de Marzo desde las 21hs en puerta y 23hs en Jam. Las entradas las podes conseguir en calle San Martin 239.",
   "entradas": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5169894843402!2d-67.48020795983558!3d-45.86096533540754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455dccbff05e5%3A0xacd53d87b9e5ae9c!2sEl%20S%C3%B3tano%20Pub!5e0!3m2!1ses!2sar!4v1690571830527!5m2!1ses!2sar"

},

 {
   "nombre":"POLIFONIA",
   "imagen":"img/invitaciondePolifonia.jpg",
   "texto":"¡En serio te vas a perder esta noche! Se presentan el dia 8 de Julio Polifonia. Las entradas las podes conseguir en calle Sarmiento 923.",
   "entradas":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5711258671254!2d-67.49074702427697!3d-45.85988203521437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455b706ec74db%3A0x1d2195a94a9e4345!2sKingston%20Beer!5e0!3m2!1ses!2sar!4v1690577061575!5m2!1ses!2sar"

}
]`

 let jsonConvertido = JSON.parse(jsonBandas)
 console.log(jsonConvertido) 
for (let i = 0; i < jsonConvertido.length; i++) {

let article = document.createElement("article")

let nombre = document.createElement("p")
nombre.innerText =jsonConvertido[i].nombre;
nombre.classList.add("presentacionpf");

let imagen = document.createElement("img")
imagen.src = jsonConvertido[i].imagen;
imagen.classList.add("invitacion23");

let texto = document.createElement("p")
texto.innerText = jsonConvertido[i].texto
texto.classList.add("presentacionpf");


let entradas = document.createElement("iframe")
entradas.src =  jsonConvertido[i].entradas
entradas.width = "200"; 
entradas.height = "200";
entradas.allowfullscreen = true;
entradas.classList.add("presentacionpf"); 

article.appendChild(nombre);
article.appendChild(imagen);
article.appendChild(texto);
article.appendChild(entradas);

document.getElementById("bandas").appendChild(article);

}