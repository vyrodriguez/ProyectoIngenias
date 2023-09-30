window.onload = () => {
    let formulario = document.querySelector("#formularioNuevoUsuario");
    let elementos = formulario.elements;
    let mensajeName = document.getElementById("mensajeName");
    let mensajePassword = document.getElementById("mensajePassword");
    let password = document.getElementById("password");
    let mensajeEmail = document.getElementById("mensajeEmail");
    

    for (let i = 0; i < elementos.length; i++) {
        let inputA = elementos[i];
        // Verificamos si el elemento es un campo de entrada de texto
        switch (inputA.type){
            case "text": 
            inputA.addEventListener("keyup", (event) => {
                let inputValue = event.target.value; // Accedemos al valor del campo que disparó el evento        
                let mensaje = "";
                // EXPRESIONES REGULARES
                let regex=/^(?=.*[a-z])(?=.*[0-9]).{7,}$/;              
                
                if (inputValue.length<7) {
                    mensaje = "El nombre de usuario debe tener al menos 7 caracteres.";
                }
                mensajeName.innerText = mensaje;

            });
            break;
            case  "password":
            inputA.addEventListener("keyup", (event) => {
                let inputValue = event.target.value; // Accedemos al valor del campo que disparó el evento        
                let mensaje = "";
                // EXPRESIONES REGULARES
                let regex=/^(?=.*[a-z])(?=.*[0-9]).{7,}$/;              
                
                if (inputValue.length<7) {
                    mensaje = "La contraseña debe tener al menos 7 caracteres.";
                }
                else{
                    if(!regex.test(inputValue)){
                        mensaje="La contraseña debe contener por lo menos un número"
                    }
                }
                mensajePass.innerText = mensaje;
                let contraseña=inputValue;
                console.log(mensajePassword)
                console.log(password) 
                if (contraseña){
                    if(contraseña===mensaje)
                    mensaje = "Las contraseñas coinciden";
                    else
                    mensaje = "Las contraseñas no coinciden";
                }
                mensajeConfirm.innerText = mensaje;
            });
            break;
            case "email":
            inputA.addEventListener("keyup", (event) => {
                let inputValue = event.target.value; // Accedemos al valor del campo que disparó el evento        
                let mensaje = "";
                let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
                if (!regex.test(inputValue)) {
                    mensaje = "Ingrese un email válido";
                }
                mensajeEmail.innerText = mensaje;
            });
            break;
        }
    }
};
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


