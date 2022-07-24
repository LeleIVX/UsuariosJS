class Usuario{
    constructor(id_usuario,user,nombre,apellido,mail,genero){
        this.id_usuario = id_usuario;
        this.user = user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.genero = genero;
    }
}

let registrarse = document.getElementById("registrarse")

let lista_usuarios = [];
var id=0

form_user.addEventListener("submit", function(e){
    
    let id_user = document.getElementById("id_usuario");
    id++;
    console.log(id);
    e.preventDefault();
    id_user.value=id
    let id_usuario = id_user;
    let user = document.getElementById("username");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    let genero = document.getElementById("genero");
    let nuevo_usuario = new Usuario (id_usuario.value,user.value, nombre.value, apellido.value, mail.value, genero.value);
    lista_usuarios.push(nuevo_usuario);
    let nuevo_usuarioJSON = JSON.stringify (nuevo_usuario);
    localStorage.setItem(id,nuevo_usuarioJSON);
    user.value="";
    nombre.value="";
    apellido.value="";
    mail.value="";

})



console.log (lista_usuarios);

btn_ingreso.addEventListener("click", function(){
    console.log ("funciona");
    let ingreso = document.getElementById("bienvenida");
    ingreso.remove();}
    ) 

/*
function buscar_usuario (usuario){
    return usuario.user == prompt("Ingrese su usario")
}

let resultado_find = lista_usuarios.find(buscar_usuario);
console.log ("Datos del usuario: ", resultado_find);*/