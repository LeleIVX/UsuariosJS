let bnt_inicio = document.getElementById("iniciar_sesion");

bnt_inicio.addEventListener("click" ,function(e){
    e.preventDefault();
    console.log ("Funciona");

})


console.log (JSON.parse(localStorage.getItem("LeleIVX")));