/*  Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración 
de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

  #Ejemplo:
codigo: "01.24"
salida: 01  */

let num = "01.24";
   console.log("numero de piso de" + num + "es" + num.substring(0,2));