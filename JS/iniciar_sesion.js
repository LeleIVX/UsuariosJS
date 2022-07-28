let bnt_inicio = document.getElementById("iniciar_sesion");

bnt_inicio.addEventListener("click" ,function(e){
    e.preventDefault();
    console.log ("Funciona")
    let usuario_inicio = document.getElementById ("user_ingreso");
    let usuario = localStorage.getItem ("LeleIVX");
    console.log(JSON.parse(usuario));
})

