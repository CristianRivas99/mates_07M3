/* Escribir un programa que obtenga las iniciales de un jugador de futbol, 
sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

#Ejemplo
Entrada: MAGB-20
Salida: MAGB */

 let nombres = "cristiano-ronaldo";

  let a_inicio = "";
  let b_inicio = "";
  let resultado = "";

  a_inicio=nombres.substring(1,2);
    for(let i=0; i< nombres.length; i++){
        if(nombres[i]=== "-"){
            b_inicio=nombres.substring(i+1,i+2);
        }
    }
if(a_inicio=="C" && b_inicio=="R"){
    resultado = a_inicio + b_inicio +"7";
}
if(a_inicio=="C" && b_inicio=="R"){
    resultado = a_inicio + b_inicio +"10";
}
  console.log("primer inicial" + a_inicio + "segundo inicial" + b_inicio);
      console.log("iniciales:" + resultado);