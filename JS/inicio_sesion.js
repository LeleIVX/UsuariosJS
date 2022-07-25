let bnt_inicio = document.getElementById("iniciar_sesion");

bnt_inicio.addEventListener("click",function(){
    let usuarios = JSON.parse(nuevo_usuarioJSON);

    for( usuarios of nuevo_usuarioJSON){
        console.log (usuarios);
    }

})