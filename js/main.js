/*Utilizzare la funzione sommaNumeri per stampare il risultato.
L'array di N numeri da passare alla funzione lo create chiedendo all'utente 
quanti numeri vuole inserire (cioè N),
e poi facendogli inserire questi N numeri all'utente stesso
tramite apposito prompt().
*/

//chiedere tramite prompt all'utente quanti numeri vuole che vengano generati (N)

let arrayNumero = [];
//facciamo dire all'utente la quantità di numeri da inserire, ossia la lunghezza dell'arrayNumero (N)
let N = parseInt(prompt("quanti numeri vuoi inserire ?"));
//facciamo dire all'utente quali saranno i singoli numeri


for (let i = 0; i < N; i++) {
let Numero = parseInt(prompt("quale numero vuoi inserire?"));
arrayNumero.push (Numero)
}




// fare un array lungo quanto (N) digitato dall'utente composto da numeri scelti dall'utente
