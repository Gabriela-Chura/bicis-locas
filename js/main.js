
document.getElementById("input-password").setAttribute("minlength", "6"); 



function validateForm() {
	var nombre, apellido, email, contraseña, expresion;
nombre = document.getElementById("name").value;
apellido = document.getElementById("lastname").value;
email = document.getElementById("input-email").value;
contraseña = document.getElementById("input-password").value;
    
var lista = document.getElementById("lista").selectedIndex;
    
    var correo =  /\w+@\w+\.+[a-z]/;
    // /\.com/; Busca la cadena “.com”.
    // /\W/; Busca cualquier caracter que no sea alfanumérico ni ‘_’.
    // /[a-z]/; Busca una letra de la ‘a’ a la ‘z’.
    
    var texto = /^[a-zA-Z\s]*$/;
    // /1*234/; Buscaría: “234”,”1234″,”11234″,etc.
    // $	Final de una línea	
    // ^	Comienzo de una línea

    if(nombre===""||apellido===""|| email===""|| contraseña==="") {
        alert("Todos los campos son obligatorios.");
        return false; 
    }
    
    else if (!texto.test(nombre)){
        alert("No es un nombre válido");
        return false;
        
    }
    
    else if (!texto.test(apellido)){
        alert("No es un apellido válido");
        return false;
        
    }
    
    else if(contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
        alert("No es una contraseña válida.")
        return false;
    }
    
    else if (!correo.test(email)) {
        alert("No es un correo válido");
        return false;
    }
    
    
    else if( lista == null || lista == 0 ) {
        alert("Escoge una de la lista.")
    return false;
}
}



//*botonderegistro ONCLICK