// ---Jsnack-6---

/*
Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
*/

/*

--DONE  1.  Creo un array vuoto che dovrà contenere i 50 numeri random "NON DOPPIONI" => let randNum = [];
--DONE  2.  Creo un ciclo while in cui genero numeri random. => while
    2.1 Controllo che i numeri generati non siano doppioni
        2.1.1 Creo una variabile "FOUND" per capire se è stato estratto o no.
        2.1.2 Se il numero è stato estratto non verrà stampato => if (randNum[i] == number) --> found = true;
        2.1.3 Se il numero non è stato estratto verrà stampato => if(!found) --> found = false;

*/

let randNum = [];
let i = 0;

while (randNum.length < 50){
    let number = Math.floor(Math.random() * 50) + 1;

    // Il indexOf() metodo restituisce la posizione della prima occorrenza di un valore specificato in una stringa.

    // IndexOf restituisce -1 se il valore non viene ritrovato.

    // Quindi se il numero generato non è presente nell'array verrà pushato (Visto che IndexOf è === -1), se è presente invece non verrà pushato perché IndexOf avrà valore diverso da -1.
    
    if (randNum.indexOf(number) === -1) {
        randNum.push(number);
    }
    i++;
}

console.log(randNum);


// ALTRA SOLUZIONE (non risolto)

// let i = 0;

// while (randNum.length < 50){
//     let number = Math.floor(Math.random() * 50) + 1;
//     let found = false;
    
//     for(let i = 0; i < randNum.length; i++) {
//         if(randNum[i] == number){
//             found = true;
//         }
//     }

//     if (!false) {
//         randNum.push(number);
//     }
//     i++;
// }

// console.log(randNum);