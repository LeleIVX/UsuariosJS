let bnt_inicio = document.getElementById("iniciar_sesion");


bnt_inicio.addEventListener("click" ,function(e){
    e.preventDefault();
    let username = document.getElementById("user_ingreso");
    let login = JSON.parse(localStorage.getItem(username.value));
    let {user,id_user,nombre,apellido,genero,mail} = login
    console.log(user,id_user,nombre,apellido,genero,mail);
        /*if (login =  ){
            alert("usuario no registrado")
        }*/
    let datos_user = document.getElementById("datos_user");
    datos_user.innerHTML = "<h2>Bienvenido!</h2>";
    datos_user.className = "container tabla-usuario";
})


