class Usuario{
    constructor(id_user,user,nombre,apellido,mail,genero){
        this.id_user = id_user;
        this.user = user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.genero = genero;
    }
}

let registrarse = document.getElementById("registrarse")

let lista_usuarios = [];
let id=0
let id_user = document.getElementById ("id_usuario");
let user = document.getElementById("username");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let genero = document.getElementById("genero");

form_user.addEventListener("submit", function(e){
    e.preventDefault();    
    id++;
    id_user.value=id
    let nuevo_usuario = new Usuario (id_user.value,user.value, nombre.value, apellido.value, mail.value, genero.value);
    
        lista_usuarios.push(nuevo_usuario);
        let nuevo_usuarioJSON = JSON.stringify (nuevo_usuario);
        localStorage.setItem(user.value,nuevo_usuarioJSON);
        user.value="";
        nombre.value="";
        apellido.value="";
        mail.value="";

    let validar = JSON.parse(localStorage.getItem(user.value));
    if (validar == null){
        
        let nuevo_usuario = new Usuario (id_user.value,user.value, nombre.value, apellido.value, mail.value, genero.value);
        lista_usuarios.push(nuevo_usuario);
        let nuevo_usuarioJSON = JSON.stringify (nuevo_usuario);
        localStorage.setItem(user.value,nuevo_usuarioJSON);
        user.value="";
        nombre.value="";
        apellido.value="";
        mail.value="";
}
    if (user.value === validar.user){
        Swal.fire({
            icon: 'error',
            title: 'Nombre de usuario no disponible',
            text: 'El nombre de usuario ya se encuentra registrado',
            footer: '<a href="./pages/iniciar_sesion.html">Ya te encontrás registrado? Inicia sesión</a>'
        })
    }
    
    else{
    let nuevo_usuario = new Usuario (id_user.value,user.value, nombre.value, apellido.value, mail.value, genero.value);
    lista_usuarios.push(nuevo_usuario);
    let nuevo_usuarioJSON = JSON.stringify (nuevo_usuario);
    localStorage.setItem(user.value,nuevo_usuarioJSON);
    user.value="";
    nombre.value="";
    apellido.value="";
    mail.value="";
}})



console.log (lista_usuarios);

$("#btn_ingreso").click(function(){
    $("#bienvenida").hide();
})