alert ("Bienvenidx al sitio");

class Usuario{
    constructor(id,user,nombre,apellido,mail,genero){
        this.id = id;
        this.user = user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.genero = genero;
    }
}

let lista_usuarios = [];
let registro= prompt("Querés registrarte? SI/NO");
let cant_registros = prompt ("Cuantos usuarios querés registrar?");
if (registro == "SI"){
    for(i =0; i<cant_registros; i++){
        let id = i;
        let user = prompt("Ingrese su nombre de usuario");
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        let mail = prompt("Ingrese su mail");
        let genero = prompt("Ingrese su género");
        
        let fin = prompt ("Terminaste tu registro? SI/NO");
        if(fin == "SI"){
            let nuevo_usuario = new usuario (id,user, nombre, apellido, mail, genero);
            lista_usuarios.push(nuevo_usuario);
            let continuar = prompt ("Desea ingresar otro usuario? SI/NO")
            if(continuar == "NO"){
                break;
            }
        }
    }
};

console.log (lista_usuarios);

/*for(let usuario of lista_usuarios){
    console.log ("ID ", usuario.id);
    console.log ("Usuario ", usuario.user);
    console.log ("Nombre ", usuario.nombre);
    console.log ("Apellido ", usuario.apellido);
    console.log ("Mail ", usuario.mail);
    console.log ("Género ", usuario.genero);
    console.log ("--------------");
}*/

function buscar_usuario (usuario){
    return usuario.user == prompt("Ingrese su usario")
}

let resultado_find = lista_usuarios.find(buscar_usuario);
console.log ("Datos del usuario: ", resultado_find);