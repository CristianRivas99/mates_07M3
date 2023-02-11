/* Escribir un programa que obtenga el nombre de usuario de facebook desde la url.
#Ejemplo
Entrada: facebook.com/nombreuser
Salida: nombreuser */
 
 let user = "facebook.com/fernandoGonzalez";
 let nameUser = "";
  
    for(let i=0; i < user.length; i++){
        if(user[i]=== "/"){
            nameUser = user.substring(i+1);
        }
    }
       console.log("nombre del usuario");