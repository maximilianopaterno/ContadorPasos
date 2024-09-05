// Variables para desplegar los formularios a completar
let boton1 = document.getElementById('iniciar');
let boton2 = document.getElementById('registrarse');
let formularioiniciosesion = document.getElementById('formularioiniciosesion');
let formularioalta = document.getElementById('formularioalta');
let ingresar = document.getElementById('ingresar');
let salir = document.getElementById('salir');

//Evento de click al botón "Iniciar sesion"
boton1.addEventListener('click', function() {
  // Muestra u oculta el formulario según su estado actual
  if (formularioiniciosesion.style.display === 'none') 
  {
    formularioiniciosesion.style.display = 'inline';
    boton2.style.display = 'none';
    setTimeout(() => {
      Swal.fire('¿Sigues Ahi?');
      // Esta seteado 100000 a modo de prueba 
    }, 100000);
  }
  else
  {
    formularioiniciosesion.style.display = 'none';
    boton2.style.display = 'inline';
  }
});

//Evento de mouse cuando se pasa/se sale por encima del boton "Iniciar sesion"
boton1.onmouseover = () => {
  boton1.classList.replace ('btn-secondary','btn-danger')
}
boton1.onmouseout = () => {
  boton1.classList.replace ('btn-danger', 'btn-secondary')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Registrarse"
boton2.onmouseover = () => {
    boton2.classList.replace ('btn-secondary','btn-info')
}
boton2.onmouseout = () => {
    boton2.classList.replace ('btn-info', 'btn-secondary')
}

//Evento al presionar el boton "Ingresar" e ir a la pagina principal
ingresar.addEventListener('click', function() {
const nombreUser = formularioiniciosesion['nombre'].value;
const emailUser = formularioiniciosesion['email'].value;

fetch('js/usuarios.json')
  .then(response => {   
      if (response) {
                          return response.json();
                       }
                     })
      .then(data => {
      // Procesar los datos JSON
      console.log(data);
      const user = data;

// Verificar si existe un usuario con el correo electrónico ingresado
const usuarioEncontrado = user.find(u => u.email === emailUser);
if (usuarioEncontrado) {
        // Usuario encontrado
       alert('Bienvenido '+nombreUser);
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido '+nombreUser,
        showConfirmButton: false,
        timer: 1500});
          window.location.href = './pages/pagina_principal.html';
      } else {
        // Usuario no encontrado
          Swal.fire({
          icon: 'error',
          title: 'Usuario inexistente',
          text: 'Complete todos los campos',
          footer: '¿Desea darse de alta? Presione en el botón "Registrarse"'
        })
        formularioiniciosesion.style.display = 'none';
        formularioiniciosesion['nombre'].value = '';
        formularioiniciosesion['email'].value = '';
        boton2.style.display = 'inline';
      }
    })
    .catch(error => {
      // Manejar errores
      console.error(error);
      alert('Error al cargar el archivo JSON:', error);
    });
});

//Evento de mouse cuando se pasa/se sale por encima del boton "Ingresar"
ingresar.onmouseover = () => {
  ingresar.classList.replace ('btn-primary','btn-danger')
}
ingresar.onmouseout = () => {
  ingresar.classList.replace ('btn-danger', 'btn-primary')
}

//Animacion de la palabra "WebSite" mediante la libreria "Anime JS"
let svgPath = document.querySelectorAll('.path');
let svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: (el, i) => { return i * 500 }
});

//Evento de click al botón "Registrarse"
boton2.addEventListener('click', function() {
// Muestra u oculta el formulario según su estado actual
  if (formularioalta.style.display === 'none') 
  {
    formularioalta.style.display = 'block';
    boton1.style.display = 'none';
    setTimeout(() => {
      Swal.fire('¿Sigues Ahi?');
      // Esta seteado a 90000 a modo de prueba 
    }, 90000);
  }
  else
  {
    formularioalta.style.display = 'none';
    boton1.style.display = 'inline';
  }
})


//Evento al presionar el boton "Salir" del Formulario de Alta
salir.onclick = () => SalirFormulario() ;
function SalirFormulario ()
                    {
                    formularioalta.style.display = 'none';
                    boton1.style.display = 'inline';
                    borrarFormularioAlta();
                    }

//Evento al presionar el boton "Darse de Alta", los datos se almacenan en el LocalStorage
let alta = document.getElementById('alta')
alta.addEventListener ('click', respuestaAlta)
function respuestaAlta(e)
{
  const newUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  e.preventDefault();
  
  const nombreUser = formularioalta['nombre'].value;
  const edadUser = formularioalta['edad'].value;
  const sexoUser = formularioalta['sexo'].value;
  const emailUser = formularioalta['email'].value;
  
  if ((nombreUser == ''))
  {
          Swal.fire({
          title: ('Ingrese su nombre por favor.'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
        })
      }
      else if (edadUser == '') {
        Swal.fire({
          title: ('Ingrese su edad por favor.'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
        })
      }
      else if ((!sexoUser == 'masculino') || (!sexoUser =='femenino') || (sexoUser == '') ) {
        Swal.fire({
          title: ('Indique por favor su genero "Masculino" o "Femenino".'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
        })
      }
      else if ((emailUser == '') || (!emailUser.includes('@')) || (!emailUser.includes('.com'))) {
        Swal.fire({
          title: ('Indique su Email, no olvides colocar el "@" y ".com".'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
        })
      }
           else
      {
        const usuario = {
                        id: newUsuarios.length, 
                        nombre: nombreUser,
                        edad: edadUser,
                        sexo: sexoUser,
                        email: emailUser,
                        }
        
        newUsuarios.push(usuario);
        console.log (usuario);
        localStorage.setItem('usuarios', JSON.stringify(newUsuarios));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Alta Exitosa\n \nBienvenido '+nombreUser,
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = './pages/pagina_principal.html';
        }, 2000);
        borrarFormularioAlta();
      }
    }
boton1.style.display = 'inline';

 //Ocultar formulario y vaciar los campos luego del alta de usuario.
function borrarFormularioAlta ()
{
  formularioalta.style.display = 'none';
  formularioalta['nombre'].value = '';
  formularioalta['edad'].value = '';
  formularioalta['sexo'].value = '';
  formularioalta['email'].value = '';
}