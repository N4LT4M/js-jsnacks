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
    arrayNumero.push(Numero);
}

sommaNumeri(arrayNumero);

let risultatoMedia = mediaAritmetica(arrayNumero);
console.log (risultatoMedia);


/*Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri 
e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media
 dei numeri che vanno chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola
e farvi restituire qual è la media di tutti i voti inseriti!
*/

//funzioni


function sommaNumeri(arrayNumero) {

    let somma = 0;
    for (let j = 0; j < arrayNumero.length; j++) {  
       somma = somma + arrayNumero[j];
    }
    console.log(somma);
}


function mediaAritmetica(arrayNumero) {
    let somma = 0
    for (let j = 0; j < arrayNumero.length; j++) {
        somma = somma + arrayNumero[j];
    }
    let media = somma / (arrayNumero.length - 1);

    return media;
}




