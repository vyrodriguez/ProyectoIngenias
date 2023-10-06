// Aca Abril va a hacer el localstorage

function mostrarAlerta() {
     alert('¡BIENVENIDOS A BANDAS COMODORENSES, NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES SOCIALES!');
}


// localstorage del primer formulario
document.querySelector('.registro').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const band = document.querySelector('input[name="band"]:checked').value;
    const message = document.getElementById('message').value;
  
    const userData = {
      name,
      email,
      phone,
      band,
      message,
    };
  
    const userDataJSON = JSON.stringify(userData);
  
    localStorage.setItem('userData', userDataJSON);
  
    console.log('Información del usuario almacenada:');
    console.log(userData);
  
    // Agregar la información a la lista en la página
    const userInfoList = document.getElementById('userInfoList');
    userInfoList.innerHTML = `
      <h2>Información del Usuario:</h2>
      <ul>
        <li>Nombre: ${name}</li>
        <li>Email: ${email}</li>
        <li>Teléfono: ${phone}</li>
        <li>Banda: ${band}</li>
        <li>Mensaje: ${message}</li>
      </ul>
    `;
  
    const userForm = document.getElementById('userForm');
    userForm.reset();
  });
  
  // localstorage para el segundo formulario
  document.querySelector('.registro2').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.querySelector('.name2').value;
    const email = document.querySelector('.email2').value;
    const phone = document.querySelector('.phone2').value;
    const genero = document.querySelector('.genero').value;
    const band2 = document.querySelector('input[name="band2"]:checked').value;
    const message2 = document.querySelector('.message2').value;
  
    const bandData = {
      name,
      email,
      phone,
      genero,
      band2,
      message2,
    };
  
    const bandDataJSON = JSON.stringify(bandData);
  
    localStorage.setItem('bandData', bandDataJSON);
  
    console.log('Información de la banda almacenada:');
    console.log(bandData);
  
    // lista de informacion
    const bandDataList = document.getElementById('bandDataList');
    bandDataList.innerHTML = `
      <h2>Información de la Banda:</h2>
      <ul>
        <li>Nombre de la Banda: ${name}</li>
        <li>Email: ${email}</li>
        <li>Teléfono: ${phone}</li>
        <li>Género Musical: ${genero}</li>
        <li>Tienen Redes Sociales: ${band2}</li>
        <li>Mensaje: ${message2}</li>
      </ul>
    `;

    const bandForm = document.getElementById('bandForm');
    bandForm.reset();
  });