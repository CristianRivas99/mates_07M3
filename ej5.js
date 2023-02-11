/* Escribir un programa para obtener el nombre de usuario de un correo electrónico.
#Ejemplo
Entrada: nombredeuser@magbdigital.net
salida: nombredeuser */

let email = "r.g.1999_fershoo_@hotmail.com";
let usuario = "";

   for(let i=o; i < email.length;i++){
     if(email[i]){
        usuario = email.substring (0,i);
     }
   }
       console.log("el nombre de usuario es:" + usuario);