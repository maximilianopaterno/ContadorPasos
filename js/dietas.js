//Variables para mostar las distintas rutinas
//Botones de indice menor a 18
let btn_menor = document.getElementById('menor');
let btn_dieta = document.getElementById('dietas1');
let btn_rutina = document.getElementById('rutinas1');
let volveralmenu_indicemenora18 = document.getElementById('volveralmenu_indicemenora18');
let volveralmenuprincipal_indicemenora18 = document.getElementById('volveralmenuprincipal_indicemenora18');
let volveralmenu_rutinamenora18 = document.getElementById('volveralmenu_rutinamenora18');
let volveralmenuprincipal_rutinamenora18 = document.getElementById('volveralmenuprincipal_rutinamenora18');

//Botones de indice entre 18 y 25
let btn_entre = document.getElementById('entre');
let btn_e_dieta = document.getElementById('dietas2');
let btn_e_rutina = document.getElementById('rutinas2');
let volveralmenu_indiceentre18y25 = document.getElementById('volveralmenu_indiceentre18y25');
let volveralmenuprincipal_indiceentre18y25 = document.getElementById('volveralmenuprincipal_indiceentre18y25');
let volveralmenu_rutinaentre18y25 = document.getElementById('volveralmenu_rutinaentre18y25');
let volveralmenuprincipal_rutinaentre18y25 = document.getElementById('volveralmenuprincipal_rutinaentre18y25');

//Botones de indice entre 25 y 29
let btn_mayor = document.getElementById('mayor');
let btn_m_dieta = document.getElementById('dietas3');
let btn_m_rutina = document.getElementById('rutinas3');
let volveralmenu_indiceentre25y29 = document.getElementById('volveralmenu_indiceentre25y29');
let volveralmenuprincipal_indiceentre25y29 = document.getElementById('volveralmenuprincipal_indiceentre25y29');
let volveralmenu_rutinaentre25y29 = document.getElementById('volveralmenu_rutinaentre25y29');
let volveralmenuprincipal_rutinaentre25y29 = document.getElementById('volveralmenuprincipal_rutinaentre25y29');

//Botones de indice mayor a 29
let btn_excedido = document.getElementById('excedido');
let btn_ex_dieta = document.getElementById('dietas4');
let btn_ex_rutina = document.getElementById('rutinas4');
let volveralmenu_indicemayora29 = document.getElementById('volveralmenu_indicemayora29');
let volveralmenuprincipal_indicemayora29 = document.getElementById('volveralmenuprincipal_indicemayora29');
let volveralmenu_rutinamayora29 = document.getElementById('volveralmenu_rutinamayora29');
let volveralmenuprincipal_rutinamayora29 = document.getElementById('volveralmenuprincipal_rutinamayora29');


//Inicio indice menor a 18
//Evento de mouse cuando se pasa/se sale por encima del boton "Indice menor a 18"
menor.onmouseover = () => {
    menor.classList.replace ('btn-primary','btn-info')
}
menor.onmouseout = () => {
    menor.classList.replace ('btn-info', 'btn-primary')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Rutinas de Ejercicios"
btn_rutina.onmouseover = () => {
  btn_rutina.classList.replace ('btn-success','btn-dark')
}
btn_rutina.onmouseout = () => {
  btn_rutina.classList.replace ('btn-dark', 'btn-success')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Dietas Sugeridas"
btn_dieta.onmouseover = () => {
  btn_dieta.classList.replace ('btn-success','btn-dark')
}
btn_dieta.onmouseout = () => {
  btn_dieta.classList.replace ('btn-dark', 'btn-success')
}

// Agrega un evento de click al botón "Indice menor a 18"
menor.addEventListener('click', function () {
    // Muestra u oculta el formulario según su estado actual
    if (btn_rutina.style.display === 'none') {
        formulariopasos.style.display = 'none';
        formularioimc.style.display = 'none';
        btn_rutina.style.display = 'inline';
        btn_dieta.style.display = 'inline';
        btn_entre.style.display = 'none';
        btn_mayor.style.display = 'none';
        btn_excedido.style.display = 'none';
        menor_rutina.style.display = 'none';
        menor_dieta.style.display = 'none';
          } else {
            btn_rutina.style.display = 'none';
            btn_dieta.style.display = 'none';
            btn_entre.style.display = 'inline';
            btn_mayor.style.display = 'inline';
            btn_excedido.style.display = 'inline';
            menor_rutina.style.display = 'none';
            menor_dieta.style.display = 'none';
          }
    });

// Agrega un evento de click al botón "Rutinas"
btn_rutina.addEventListener('click', function () {
    // Muestra u oculta el formulario según su estado actual
    if (menor_rutina.style.display === 'none') {
      menor_rutina.style.display = 'block';
      menor_rutina.style.height = '1200px';
      btn_dieta.style.display = 'none';
          } else {
            menor_rutina.style.display = 'none';
            btn_dieta.style.display = 'inline';
                      }
    });   
    
// Agrega un evento de click al botón "Dietas"
btn_dieta.addEventListener('click', function () {
    // Muestra u oculta el formulario según su estado actual
    if (menor_dieta.style.display === 'none') {
        menor_dieta.style.display = 'block';
        menor_dieta.style.height = '990px';
        btn_rutina.style.display = 'none';
          } else {
            menor_dieta.style.display = 'none';
            btn_rutina.style.display = 'inline';
            menor_dieta.style.display ='none';
          }
    });  

// Agrega un evento de click al botón "Subir" opcion "Rutina"
volveralmenu_rutinamenora18.onmouseover = () => {
  volveralmenu_rutinamenora18.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_rutinamenora18.onmouseout = () => {
  volveralmenu_rutinamenora18.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Rutina"
volveralmenuprincipal_rutinamenora18.onmouseover = () => {
  volveralmenuprincipal_rutinamenora18.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_rutinamenora18.onmouseout = () => {
  volveralmenuprincipal_rutinamenora18.classList.replace ('btn-warning','btn-success')
}

// Agrega un evento de click al botón "Subir" opcion "Dieta"
volveralmenu_indicemenora18.onmouseover = () => {
  volveralmenu_indicemenora18.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_indicemenora18.onmouseout = () => {
  volveralmenu_indicemenora18.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Dieta"
volveralmenuprincipal_indicemenora18.onmouseover = () => {
  volveralmenuprincipal_indicemenora18.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_indicemenora18.onmouseout = () => {
  volveralmenuprincipal_indicemenora18.classList.replace ('btn-warning','btn-success')
}
    
//Boton "Subir opcion dieta" para volver a desplegar todas las opciones
volveralmenu_indicemenora18.onclick = () => subir1() ;
function subir1 ()
              {
                menor_dieta.style.display = 'none';
                btn_rutina.style.display = 'inline';
              } 

//Boton "Menu Principal opcion dieta" para volver a desplegar todas las opciones
volveralmenuprincipal_indicemenora18.onclick = () => volver1() ;
function volver1 ()
              {
                menor_dieta.style.display = 'none';
                btn_dieta.style.display = 'none';
                btn_entre.style.display = 'inline';
                btn_mayor.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 

//Boton "Subir opcion rutina" para volver a desplegar todas las opciones
volveralmenu_rutinamenora18.onclick = () => subir_rutina1() ;
function subir_rutina1 ()
              {
                menor_rutina.style.display = 'none';
                btn_dieta.style.display = 'inline';
              } 

//Boton "Menu Principal opcion rutina" para volver a desplegar todas las opciones
volveralmenuprincipal_rutinamenora18.onclick = () => volver_rutina1() ;
function volver_rutina1 ()
              {
                menor_rutina.style.display = 'none';
                btn_rutina.style.display = 'none';
                btn_entre.style.display = 'inline';
                btn_mayor.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 
//Fin Indice menor a 18
//Inicio indice entre 18 y 25

//Evento de mouse cuando se pasa/se sale por encima del boton "Indice menor a 18"
entre.onmouseover = () => {
  entre.classList.replace ('btn-primary','btn-info')
}
entre.onmouseout = () => {
  entre.classList.replace ('btn-info', 'btn-primary')
}


// Agrega un evento de click al botón "Indice entre 18 y 25"
entre.addEventListener('click', function () {
// Muestra u oculta el formulario según su estado actual
        if (btn_e_rutina.style.display === 'none') {
            formulariopasos.style.display = 'none';
            formularioimc.style.display = 'none';
            btn_e_rutina.style.display = 'inline';
            btn_e_dieta.style.display = 'inline';
            btn_menor.style.display = 'none';
            btn_mayor.style.display = 'none';
            btn_excedido.style.display = 'none';
            entre_rutina.style.display = 'none';
            entre_dieta.style.display = 'none';
              } else {
                btn_e_rutina.style.display = 'none';
                btn_e_dieta.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_mayor.style.display = 'inline';
                btn_excedido.style.display = 'inline';
                entre_rutina.style.display = 'none';
                entre_dieta.style.display = 'none';
    
              }
        })


//Evento de mouse cuando se pasa/se sale por encima del boton "Rutinas de Ejercicios"
btn_e_rutina.onmouseover = () => {
  btn_e_rutina.classList.replace ('btn-success','btn-dark')
}
btn_e_rutina.onmouseout = () => {
  btn_e_rutina.classList.replace ('btn-dark', 'btn-success')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Dietas Sugeridas"
btn_e_dieta.onmouseover = () => {
  btn_e_dieta.classList.replace ('btn-success','btn-dark')
}
btn_e_dieta.onmouseout = () => {
  btn_e_dieta.classList.replace ('btn-dark', 'btn-success')
}

// Agrega un evento de click al botón "Rutina"
btn_e_rutina.addEventListener('click', function () {
  // Muestra u oculta el formulario según su estado actual
  if (entre_rutina.style.display === 'none') {
    entre_rutina.style.display = 'block';
    entre_rutina.style.height = '910px'
    btn_e_dieta.style.display = 'none';
        } else {
          entre_rutina.style.display = 'none';
          btn_e_dieta.style.display = 'inline';
                    }
  });   
 
// Agrega un evento de click al botón "Dieta"
btn_e_dieta.addEventListener('click', function () {
  // Muestra u oculta el formulario según su estado actual
  if (entre_dieta.style.display === 'none') {
      entre_dieta.style.display = 'block';
      entre_dieta.style.height = '750px';
      btn_e_rutina.style.display = 'none';
        } else {
          entre_dieta.style.display = 'none';
          btn_e_rutina.style.display = 'inline';
          entre_dieta.style.display ='none';
        }
  });  

// Agrega un evento de click al botón "Subir" opcion "Rutina"
volveralmenu_rutinaentre18y25.onmouseover = () => {
  volveralmenu_rutinaentre18y25.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_rutinaentre18y25.onmouseout = () => {
  volveralmenu_rutinaentre18y25.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Rutina"
volveralmenuprincipal_rutinaentre18y25.onmouseover = () => {
  volveralmenuprincipal_rutinaentre18y25.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_rutinaentre18y25.onmouseout = () => {
  volveralmenuprincipal_rutinaentre18y25.classList.replace ('btn-warning','btn-success')
}  

// Agrega un evento de click al botón "Subir" opcion "Dieta"
volveralmenu_indiceentre18y25.onmouseover = () => {
  volveralmenu_indiceentre18y25.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_indiceentre18y25.onmouseout = () => {
  volveralmenu_indiceentre18y25.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Dieta"
volveralmenuprincipal_indiceentre18y25.onmouseover = () => {
  volveralmenuprincipal_indiceentre18y25.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_indiceentre18y25.onmouseout = () => {
  volveralmenuprincipal_indiceentre18y25.classList.replace ('btn-warning','btn-success')
}  

//Boton "Subir opcion dieta" para volver a desplegar todas las opciones
volveralmenu_indiceentre18y25.onclick = () => subir2() ;
function subir2 ()
              {
                entre_dieta.style.display = 'none';
                btn_e_rutina.style.display = 'inline';
              } 

//Boton "Menu Principal opcion dieta" para volver a desplegar todas las opciones
volveralmenuprincipal_indiceentre18y25.onclick = () => volver2() ;
function volver2 ()
              {
                entre_dieta.style.display = 'none';
                btn_e_dieta.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_mayor.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 

//Boton "Subir opcion rutina" para volver a desplegar todas las opciones
volveralmenu_rutinaentre18y25.onclick = () => subir_rutina2() ;
function subir_rutina2 ()
              {
                entre_rutina.style.display = 'none';
                btn_e_dieta.style.display = 'inline';
              } 

//Boton "Menu Principal opcion rutina" para volver a desplegar todas las opciones
volveralmenuprincipal_rutinaentre18y25.onclick = () => volver_rutina2() ;
function volver_rutina2 ()
              {
                entre_rutina.style.display = 'none';
                btn_e_rutina.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_mayor.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 

//Fin indice entre 18 y 25
//Inico indice entre 25 y 29

//Evento de mouse cuando se pasa/se sale por encima del boton "Indice entre 25 y 29"
mayor.onmouseover = () => {
  mayor.classList.replace ('btn-primary','btn-info')
}
mayor.onmouseout = () => {
  mayor.classList.replace ('btn-info', 'btn-primary')
}

// Agrega un evento de click al botón "Indice entre 25 y 29"
mayor.addEventListener('click', function () {
// Muestra u oculta el formulario según su estado actual
if (btn_m_rutina.style.display === 'none') {
            formulariopasos.style.display = 'none';
            formularioimc.style.display = 'none';
            btn_m_rutina.style.display = 'inline';
            btn_m_dieta.style.display = 'inline';
            btn_menor.style.display = 'none';
            btn_entre.style.display = 'none';
            btn_excedido.style.display = 'none';
            mayor_rutina.style.display = 'none';
            mayor_dieta.style.display = 'none';
              } else {
                btn_m_rutina.style.display = 'none';
                btn_m_dieta.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_entre.style.display = 'inline';
                btn_excedido.style.display = 'inline';
                mayor_rutina.style.display = 'none';
                mayor_dieta.style.display = 'none';
              }
        })

//Evento de mouse cuando se pasa/se sale por encima del boton "Rutinas de Ejercicios"
btn_m_rutina.onmouseover = () => {
  btn_m_rutina.classList.replace ('btn-success','btn-dark')
}
btn_m_rutina.onmouseout = () => {
  btn_m_rutina.classList.replace ('btn-dark', 'btn-success')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Dietas Sugeridas"
btn_m_dieta.onmouseover = () => {
  btn_m_dieta.classList.replace ('btn-success','btn-dark')
}
btn_m_dieta.onmouseout = () => {
  btn_m_dieta.classList.replace ('btn-dark', 'btn-success')
}
    
// Agrega un evento de click al botón "Rutinas"
btn_m_rutina.addEventListener('click', function () {
  // Muestra u oculta el formulario según su estado actual
  if (mayor_rutina.style.display === 'none') {
    mayor_rutina.style.display = 'block';
    mayor_rutina.style.height = '990px'
    btn_m_dieta.style.display = 'none';
        } else {
          mayor_rutina.style.display = 'none';
          btn_m_dieta.style.display = 'inline';
          mayor_rutina.style.display = 'none';
        }
  });   
 
// Agrega un evento de click al botón "Dietas"
btn_m_dieta.addEventListener('click', function () {
  // Muestra u oculta el formulario según su estado actual
  if (mayor_dieta.style.display === 'none') {
      mayor_dieta.style.display = 'block';
      mayor_dieta.style.height = '830px';
      btn_m_rutina.style.display = 'none';
        } else {
          mayor_dieta.style.display = 'none';
          btn_m_rutina.style.display = 'inline';
          mayor_dieta.style.display ='none';
        }
  }); 

// Agrega un evento de click al botón "Subir" opcion "Rutina"
volveralmenu_rutinaentre25y29.onmouseover = () => {
  volveralmenu_rutinaentre25y29.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_rutinaentre25y29.onmouseout = () => {
  volveralmenu_rutinaentre25y29.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Rutina"
volveralmenuprincipal_rutinaentre25y29.onmouseover = () => {
  volveralmenuprincipal_rutinaentre25y29.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_rutinaentre25y29.onmouseout = () => {
  volveralmenuprincipal_rutinaentre25y29.classList.replace ('btn-warning','btn-success')
}  

// Agrega un evento de click al botón "Subir" opcion "Dieta"
volveralmenu_indiceentre25y29.onmouseover = () => {
  volveralmenu_indiceentre25y29.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_indiceentre25y29.onmouseout = () => {
  volveralmenu_indiceentre25y29.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Dieta"
volveralmenuprincipal_indiceentre25y29.onmouseover = () => {
  volveralmenuprincipal_indiceentre25y29.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_indiceentre25y29.onmouseout = () => {
  volveralmenuprincipal_indiceentre25y29.classList.replace ('btn-warning','btn-success')
}  

//Boton "Subir opcion dieta" para volver a desplegar todas las opciones
volveralmenu_indiceentre25y29.onclick = () => subir3() ;
function subir3 ()
              {
                mayor_dieta.style.display = 'none';
                btn_m_rutina.style.display = 'inline';
              } 

//Boton "Menu Principal opcion dieta" para volver a desplegar todas las opciones
volveralmenuprincipal_indiceentre25y29.onclick = () => volver3() ;
function volver3 ()
              {
                mayor_dieta.style.display = 'none';
                btn_m_dieta.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_entre.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 

//Boton "Subir opcion rutina" para volver a desplegar todas las opciones
volveralmenu_rutinaentre25y29.onclick = () => subir_rutina3() ;
function subir_rutina3 ()
              {
                mayor_rutina.style.display = 'none';
                btn_m_dieta.style.display = 'inline';
              } 

//Boton "Menu Principal opcion rutina" para volver a desplegar todas las opciones
volveralmenuprincipal_rutinaentre25y29.onclick = () => volver_rutina3() ;
function volver_rutina3 ()
              {
                mayor_rutina.style.display = 'none';
                btn_m_rutina.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_entre.style.display = 'inline';
                btn_excedido.style.display = 'inline';
              } 

//Fin indice entre 25 y 29
//Inicio indice mayor a 29
//Evento de mouse cuando se pasa/se sale por encima del boton "Indice entre 25 y 29"
excedido.onmouseover = () => {
  excedido.classList.replace ('btn-primary','btn-info')
}
excedido.onmouseout = () => {
  excedido.classList.replace ('btn-info', 'btn-primary')
}

  // Agrega un evento de click al botón "Indice mayor a 29"
excedido.addEventListener('click', function () {
  // Muestra u oculta el formulario según su estado actual
  if (btn_ex_rutina.style.display === 'none') {
              formulariopasos.style.display = 'none';
              formularioimc.style.display = 'none';
              btn_ex_rutina.style.display = 'inline';
              btn_ex_dieta.style.display = 'inline';
              btn_menor.style.display = 'none';
              btn_entre.style.display = 'none';
              btn_mayor.style.display = 'none';
              excedido_rutina.style.display = 'none';
              excedido_dieta.style.display = 'none';
                } else {
                  btn_ex_rutina.style.display = 'none';
                  btn_ex_dieta.style.display = 'none';
                  btn_menor.style.display = 'inline';
                  btn_entre.style.display = 'inline';
                  btn_mayor.style.display = 'inline';
                  excedido_rutina.style.display = 'none';
                  excedido_dieta.style.display = 'none';
                }
          })

//Evento de mouse cuando se pasa/se sale por encima del boton "Rutinas de Ejercicios"
btn_ex_rutina.onmouseover = () => {
  btn_ex_rutina.classList.replace ('btn-success','btn-dark')
}
btn_ex_rutina.onmouseout = () => {
  btn_ex_rutina.classList.replace ('btn-dark', 'btn-success')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Dietas Sugeridas"
btn_ex_dieta.onmouseover = () => {
  btn_ex_dieta.classList.replace ('btn-success','btn-dark')
}
btn_ex_dieta.onmouseout = () => {
  btn_ex_dieta.classList.replace ('btn-dark', 'btn-success')
}

// Agrega un evento de click al botón "Rutinas"
btn_ex_rutina.addEventListener('click', function () {
// Muestra u oculta el formulario según su estado actual
if (excedido_rutina.style.display === 'none') {
    excedido_rutina.style.display = 'block';
    excedido_rutina.style.height = '990px'
    btn_ex_dieta.style.display = 'none';
        } else {
          excedido_rutina.style.display = 'none';
          btn_ex_dieta.style.display = 'inline';
          excedido_rutina.style.display = 'none';
        }
  });   
 
// Agrega un evento de click al botón "Dietas"
btn_ex_dieta.addEventListener('click', function () {
// Muestra u oculta el formulario según su estado actual
if (excedido_dieta.style.display === 'none') {
      excedido_dieta.style.display = 'block';
      excedido_dieta.style.height = '890px';
      btn_ex_rutina.style.display = 'none';
        } else {
          excedido_dieta.style.display = 'none';
          btn_ex_rutina.style.display = 'inline';
          excedido_dieta.style.display ='none';
        }
  }); 

  // Agrega un evento de click al botón "Subir" opcion "Rutina"
volveralmenu_rutinamayora29.onmouseover = () => {
  volveralmenu_rutinamayora29.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_rutinamayora29.onmouseout = () => {
  volveralmenu_rutinamayora29.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Rutina"
volveralmenuprincipal_rutinamayora29.onmouseover = () => {
  volveralmenuprincipal_rutinamayora29.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_rutinamayora29.onmouseout = () => {
  volveralmenuprincipal_rutinamayora29.classList.replace ('btn-warning','btn-success')
}  

// Agrega un evento de click al botón "Subir" opcion "Dieta"
volveralmenu_indicemayora29.onmouseover = () => {
  volveralmenu_indicemayora29.classList.replace ('btn-danger','btn-warning')
}
volveralmenu_indicemayora29.onmouseout = () => {
  volveralmenu_indicemayora29.classList.replace ('btn-warning','btn-danger')
}  

// Agrega un evento de click al botón "Menu Principal" opcion "Dieta"
volveralmenuprincipal_indicemayora29.onmouseover = () => {
  volveralmenuprincipal_indicemayora29.classList.replace ('btn-success','btn-warning')
}
volveralmenuprincipal_indicemayora29.onmouseout = () => {
  volveralmenuprincipal_indicemayora29.classList.replace ('btn-warning','btn-success')
}  

//Boton "Subir opcion dieta" para volver a desplegar todas las opciones
volveralmenu_indicemayora29.onclick = () => subir4() ;
function subir4 ()
              {
                excedido_dieta.style.display = 'none';
                btn_ex_rutina.style.display = 'inline';
              } 

//Boton "Menu Principal opcion dieta" para volver a desplegar todas las opciones
volveralmenuprincipal_indicemayora29.onclick = () => volver4() ;
function volver4 ()
              {
                excedido_dieta.style.display = 'none';
                btn_ex_dieta.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_entre.style.display = 'inline';
                btn_mayor.style.display = 'inline';
              } 

//Boton "Subir opcion rutina" para volver a desplegar todas las opciones
volveralmenu_rutinamayora29.onclick = () => subir_rutina4() ;
function subir_rutina4 ()
              {
                excedido_rutina.style.display = 'none';
                btn_ex_dieta.style.display = 'inline';
              } 

//Boton "Menu Principal opcion rutina" para volver a desplegar todas las opciones
volveralmenuprincipal_rutinamayora29.onclick = () => volver_rutina4() ;
function volver_rutina4 ()
              {
                excedido_rutina.style.display = 'none';
                btn_ex_rutina.style.display = 'none';
                btn_menor.style.display = 'inline';
                btn_entre.style.display = 'inline';
                btn_mayor.style.display = 'inline';
              } 

//Fin indice mayor a 29
