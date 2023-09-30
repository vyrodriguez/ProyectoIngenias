window.onload = () => {
    let formulario = document.querySelector(".registro");
    let elementos = formulario.elements;
    let mensajeName = document.getElementById("mensajeName");
    let mensajeEmail = document.getElementById("mensajeEmail");

    for (let i = 0; i < elementos.length; i++) {
        let inputA = elementos[i];
        // Verificamos si el elemento es un campo de entrada de texto
        if (inputA.type === "text") {
            inputA.addEventListener("keyup", (event) => {
                let inputValue = event.target.value; // Accedemos al valor del campo que disparó el evento        
                console.log(inputValue)
                let mensaje = "";
                // Expresión regular que permite solo letras y espacios
                let regex = /^[A-Za-z\s]+$/;

                if (!regex.test(inputValue)) {
                    mensaje = "El nombre no debe contener números ni símbolos";
                }
                mensajeName.innerText = mensaje;
            });
        }
        else if (inputA.type === "email"){
            inputA.addEventListener("keyup", (event) => {
                let inputValue = event.target.value; // Accedemos al valor del campo que disparó el evento        
                console.log(inputValue)
                let mensaje = "";
                let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
                if (!regex.test(inputValue)) {
                    mensaje = "Ingrese un email valido";
                }
                mensajeEmail.innerText = mensaje;
            });
        }

    }
}
 function mostrarAlerta() {
     alert('¡BIENVENIDOS A BANDAS COMODORENSES, NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES SOCIALES!');
 }


function iniciarSesion() {

    let arrayDeUsuarios = [
        //Usuario N°1
        {
            usuario: "vicky",
            contrasena: "123456",
        },
        // Usuario N°2
        { 
            usuario: "abril",
            contrasena: "asdfg",
        },
        // Usuario N°3
        { 
            usuario: "ale",
            contrasena: "394jsj",
            
        },
    ]
    
    var usuario = prompt("Ingrese su nombre de usuario:");
    var contrasena = prompt("Ingrese su contraseña:");
    if (usuario && contrasena){
        console.log(arrayDeUsuarios.length);
        console.log(usuario);
        console.log(contrasena);
          for (let i = 0; i < arrayDeUsuarios.length; i++){
             console.log(arrayDeUsuarios);
              if(usuario== arrayDeUsuarios[i].usuario && contrasena == arrayDeUsuarios[i].contrasena ){
              var exito= "Inicio de sesion exitoso";
              }
              else{
                  alert('Nombre de usuario o contraseña incorrecta')
              }
          }
    }
    else{
        alert('Debe ingresar un nombre de usuario y contraseña')
    }
    
}

function Registrarse() {
    alert('Sin Habilitar, sepan disculpar')
}


