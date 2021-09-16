/* 
    DEFINIENDO ENUMERADOS
    Typescript nos permite crear enumerados, que podríamos definir como un
    listado de constantes. Veamos un ejemplo

    Puedes saber más en: https://www.typescriptlang.org/docs/handbook/enums.html

    --- Resultado esperado por consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

import { off } from "process";

enum Personaje {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código bajo esta línea

function getName(personaje: Personaje): string {
  
  if (personaje === Personaje.Bueno) {
    return 'Rubio';
  }
  else 
  if(personaje === Personaje.Feo)
  {return 'Tuco'}
  else 
  if(personaje === Personaje.Malo)
  {return 'Sentencia'}
  else 

    throw 'No hay ni bueno ni malo ni feo';
    
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getName(Personaje.Bueno)}, al malo ${getName(
    Personaje.Malo
  )} y, al feo, ${getName(Personaje.Feo)}`
);
