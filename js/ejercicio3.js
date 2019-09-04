console.log('Ejercicio 3: ');
/*Ejercicio 3: 
Mi lista de reproduccion por ahora tiene 0 canciones porque esta vacia.
Ahora ya tengo mi album de Soda listo para reproducirse.En la ciudad de la furia,
En rito,Hombre al agua,En el septimo dia con un total de 4 canciones.
La proxima cancion a reproducir es En el septimo dia
Y restan en mi lista: En la ciudad de la furia,En rito,Hombre al agua*/

var listaDeReproduccion = [];

console.log('Mi lista de reproduccion por ahora tiene.' + listaDeReproduccion.length + 'canciones porque esta vacia.');

listaDeReproduccion.push('En la ciudad de la furia');
listaDeReproduccion.push('En rito');
listaDeReproduccion.push('Hombre al agua');
listaDeReproduccion.push('En el septimo dia');

console.log('Ahora ya tengo mi album de Soda listo para reproducirse.' + listaDeReproduccion + ' con un total de ' + listaDeReproduccion.length + ' canciones.');

// var proximaCancion = listaDeReproduccion.pop(); en de lo que se ve

listaDeReproduccion.pop();
listaDeReproduccion.push('En el septimo dia');


var proximaCancion = listaDeReproduccion[3];

console.log('La proxima cancion a reproducir es ' + proximaCancion);
console.log('Y restan en mi lista: ' + listaDeReproduccion);
