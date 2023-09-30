// Aca Abril va a hacer el localstorage

function mostrarAlerta() {
     alert('¡BIENVENIDOS A BANDAS COMODORENSES, NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES SOCIALES!');
}

// Función para guardar información en localStorage
function guardarInformacion() {
    const nombre = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const telefono = document.querySelector(".phone").value;
    const banda = document.querySelector('input[name="band"]:checked').value;
    const mensaje = document.getElementById("message").value;

    // Crear un objeto para almacenar los datos
    const datos = {
        nombre,
        email,
        telefono,
        banda,
        mensaje
    };

    // Obtener datos existentes 
    let datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];

    // Agregar los nuevos datos a la lista
    datosGuardados.push(datos);

    // Almacenar la lista actualizada en localStorage
    localStorage.setItem("datos", JSON.stringify(datosGuardados));

    // Limpiar el formulario
    document.getElementById("formulario").reset();

    // Mostrar la información actualizada
    mostrarInformacion();
}

 Función para mostrar la información almacenada
 function mostrarInformacion() {
     const listaInformacion = document.getElementById("listaInformacion");
     listaInformacion.textContent = "";
//  Obtener datos almacenados en localStorage
     const datosGuardados = JSON.parse(localStorage.getItem("datos"));
     // esto igual se va a ver en la pagina los datos guardados

     if (datosGuardados && datosGuardados.length > 0) {
          for (let index = 0; index < datosGuardados.length; index++) {
              const datos = datosGuardados[index];
              const li = document.createElement("li");
              li.textContent = JSON.stringify(datos);
            listaInformacion.appendChild(li);
         } 
         } else {
          listaInformacion.textContent = "<li>No hay información almacenada.</li>";
      } }

   
// Agregar un evento al formulario para guardar los datos
// const formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", function (e) {
//       e.preventDefault();
//      guardarInformacion();
// });


// Mostrar la información almacenada al cargar la página
mostrarInformacionDesdeLocalStorage();