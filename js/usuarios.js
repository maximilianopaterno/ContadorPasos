//Declaracion de usuarios 
const usuarios = [
{id:0, nombre: "Cecilia", edad:37, sexo: "Femenino", email: "ceciliasosa83@gmail.com"},
{id:1, nombre: "Maximiliano", edad:38, sexo: "Masculino", email: "maximilianopaterno83@gmail.com"},
{id:2, nombre: "Azul", edad:3, sexo: "Femenino", email: "azul2019@gmail.com"},
{id:3, nombre: "Maria", edad:35, sexo: "Femenino", email: "marisosa_16@hotmail.com"},
{id:4, nombre: "Ramon", edad:72, sexo: "Masculino", email: "ramonsosa@gmail.com"}
]


//Almacenar usuarios en LocalStorage
localStorage.setItem('usuarios', JSON.stringify(usuarios));
