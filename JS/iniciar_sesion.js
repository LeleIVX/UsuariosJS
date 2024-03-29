let bnt_inicio = document.getElementById("iniciar_sesion");
bnt_inicio.addEventListener("click" ,function(e){
    e.preventDefault();
    let username = document.getElementById("user_ingreso").value;
    login (username);})
    
    const login = async (username) =>{
        try{
            const response = await fetch ("../JS/usuarios.json");
            const users = await response.json();
            let found = false
            for (const usuarios of users){
                if (usuarios.user === username){
                    let {user,id_user,nombre,apellido,genero,mail} = usuarios;
                    let datos_user = document.getElementById("datos_user");
                    datos_user.innerHTML = "<h2>Bienvenido!</h2><table class='table table-borderless'><tbody><tr><th>Usuario</th><td id='username'></td></tr><tr><th>ID</th><td id='id'></td></tr><tr><th>Nombre</th><td id='nombre'></td></tr><tr><th>Apellido</th><td id='apellido'></td></tr><tr><th>Género</th><td id='genero'></td></tr><tr><th>Email</th><td id='email'></td></tr></tbody></table>";
                    datos_user.className = "container tabla-usuario";
                    document.getElementById("username").innerText = user;
                    document.getElementById("id").innerText = id_user;
                    document.getElementById("nombre").innerText = nombre;
                    document.getElementById("apellido").innerText = apellido;
                    document.getElementById("genero").innerText = genero;
                    document.getElementById("email").innerText = mail;
                    found = true;
                    
                }}
                if(!found){
                    Swal.fire({
                        icon: 'error',
                        title: 'Nombre de usuario no registrado',
                        text: 'Deseas registrar un nuevo usuario?',
                        footer: '<a href="../index.html#titulo">Registrarme</a>'
                })
                }
        }
        catch(error){            
        }
    }

