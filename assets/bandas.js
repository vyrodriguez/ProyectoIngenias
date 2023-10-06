// TRABAJADO POR ANA VICTORIA RODRIGUEZ

window.onload = () => {
    let formulario = document.querySelector("#formularioNuevoUsuario");
    let mensajeName = document.getElementById("mensajeName");
    let mensajePassword = document.getElementById("mensajePass");
    let mensajeEmail = document.getElementById("mensajeEmail");
    let inputName = document.getElementById("name");
    let inputPassword = document.getElementById("password");
    let inputConfirmPassword = document.getElementById("confirmPassword");
    let inputEmail = document.getElementById("email");
    let flagPassword=0;
    let flagConfir=0;
    let flagName=0;
    let flagEmail=0;

    inputName.addEventListener("keyup", (event) => {
        let datoName = event.target.value;
        let mensaje = "";
        let regex = /^(?=.*[a-z])(?=.*[0-9]).{7,}$/;

        if (datoName.length < 7) {
            mensaje = "El nombre de usuario debe tener al menos 7 caracteres.";
           flagName=0;
        }
        else {
           flagName=1;
        }
        mensajeName.innerText = mensaje;
    });

    inputPassword.addEventListener("keyup", (event) => {
        let datoPass = event.target.value;
        let mensaje = "";
        let regex = /[0-9]/;

        if (datoPass.length < 7) {
            mensaje = "La contraseña debe tener al menos 7 caracteres.";
           flagPassword=0;
        } else {
            if (!regex.test(datoPass)) {
                mensaje = "La contraseña debe contener por lo menos un número"
               flagPassword=0;
            }
            else{
                flagPassword=1;
            }
        }

        mensajePassword.innerText = mensaje;
    });

    inputConfirmPassword.addEventListener("keyup", (event) => {
        let inputValue = event.target.value;
        let mensaje = "";
        let regex = /[0-9]/;

        if (inputValue.length < 7) {
            mensaje = "La contraseña debe tener al menos 7 caracteres.";
           flagConfir=0;
        } else {
            if (!regex.test(inputValue)) {
                mensaje = "La contraseña debe contener por lo menos un número";
             flagConfir=0;
            }
            else{
                if (inputPassword.value) {
                    if (inputPassword.value === inputValue) {
                        mensaje = "Las contraseñas coinciden"
                       flagConfir=1;
                
                    } else {
                        mensaje = "LAS CONTRASEÑAS NO COINCIDEN"
                       flagConfir=0;
                    }
                } else {
                    mensaje = "LAS CONTRASEÑAS NO COINCIDEN"
                   flagConfir=0;
                }
            }
        }
        mensajeConfirm.innerText = mensaje;
    });

    inputEmail.addEventListener("keyup", (event) => {
         datoEmail = event.target.value;
        let mensaje = "";
        let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
        if (!regex.test(datoEmail)) {
            mensaje = "Ingrese un email válido";
            flagEmail=0;
        }
        else {
            flagEmail=1;
        }

        mensajeEmail.innerText = mensaje;

    });
    // Guardado de infomación del formulario.
    formulario.addEventListener('submit', function(event){
    event.preventDefault();
    if (flagEmail != 1 || flagConfir != 1 || flagName != 1 || flagPassword != 1) {
        console.log(flagEmail);
        alert("Falta completar datos");
    }
    else{
        alert("Registro Exitoso");        
        // Guardar la variable en localStorage
        localStorage.setItem("nameGuardado", inputName.value);
        localStorage.setItem("PassGuardado", inputPassword.value);
    }
 }); //fin del evento

};//fin del load.

function iniciarSesion() {
    let arrayDeUsuarios = [
        //Usuario N°1
        {
            usuario: localStorage.getItem("nameGuardado"),
            contrasena: localStorage.getItem("PassGuardado"),
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

    if (usuario && contrasena) {
        var exito = false; // Variable para indicar si se ha encontrado una coincidencia
        for (let i = 0; i < arrayDeUsuarios.length; i++) {
            if (usuario === arrayDeUsuarios[i].usuario && contrasena === arrayDeUsuarios[i].contrasena) {
                exito = true; // Coincidencia encontrada
                break; // Salir del bucle una vez que se haya encontrado una coincidencia
            }
        }
        if (exito) {
            alert("Inicio de sesión exitoso");
        } else {
            alert("Nombre de usuario o contraseña incorrecta");
        }
    } else {
        alert("Debe ingresar un nombre de usuario y contraseña");
    }
   let miPerfil=document.getElementById("miPerfil")
   miPerfil.innerText = "Mi perfil";

   let cerrarSession=document.getElementById("cerrarSession")
   cerrarSession.innerText = "Cerrar Sesion";
    
}


