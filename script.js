// Función que permite quitar el menú cada que seleccionamos una opción

function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //--> Se hace desaparecer el menú un vez seleccionado en el menú responsive
    let navOpc = document.getElementById("nav");
    navOpc.className = "";
}

// Función que muestra el menú responsive

function responsiveMenu(){
    let navMenu = document.getElementById("nav");
    if(navMenu.className === ""){
        navMenu.className = "responsive";
    } else{
        navMenu.className = "";
    }
}
