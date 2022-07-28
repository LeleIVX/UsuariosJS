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

form_user.addEventListener("submit", function(e){
    
    id++;
    e.preventDefault();
    let id_user = document.getElementById ("id_usuario");
    id_user.value=id
    let user = document.getElementById("username");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    let genero = document.getElementById("genero");
    let nuevo_usuario = new Usuario (id_user.value,user.value, nombre.value, apellido.value, mail.value, genero.value);
    lista_usuarios.push(nuevo_usuario);
    let nuevo_usuarioJSON = JSON.stringify (nuevo_usuario);
    let userJSON = JSON.stringify (user.value);
    localStorage.setItem(userJSON,nuevo_usuarioJSON);
    user.value="";
    nombre.value="";
    apellido.value="";
    mail.value="";
})



console.log (lista_usuarios);

let inicio = document.getElementById("btn_ingreso")

inicio.addEventListener("click", function(){
    let bienvenida = document.getElementById("bienvenida");
    bienvenida.remove();
})




