alert ("Bienvenidx al sitio");

let lista_usuarios = [];
let registro= prompt("Querés registrarte? SI/NO");
if (registro == "SI"){
    for(i =0; i<10; i++){
        let user = prompt("Ingrese su nombre de usuario");
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        let mail = prompt("Ingrese su mail");
        let genero = prompt("Ingrese su género");
        let nuevo_usuario = new usuario (user, nombre, apellido, mail, genero);
        lista_usuarios.push(nuevo_usuario);

        let fin = prompt ("Terminaste tu registro? SI/NO");
        if(fin == "SI"){
            break;
        }
    }
};