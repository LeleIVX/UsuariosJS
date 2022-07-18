alert ("Bienvenidx al sitio");

class Usuario{
    constructor(user,nombre,apellido,mail,genero){
        this.user = user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.genero = genero;
    }
}

let registrarse = document.getElementById("registrarse")

let lista_usuarios = [];

form_user.addEventListener("submit", function(e){

    e.preventDefault();
    let user = document.getElementById("username");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    let genero = document.getElementById("genero");

    let nuevo_usuario = new Usuario (user.value, nombre.value, apellido.value, mail.value, genero.value);
    lista_usuarios.push(nuevo_usuario);

})



console.log (lista_usuarios);

/*
function buscar_usuario (usuario){
    return usuario.user == prompt("Ingrese su usario")
}

let resultado_find = lista_usuarios.find(buscar_usuario);
console.log ("Datos del usuario: ", resultado_find);*/