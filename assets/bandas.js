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


