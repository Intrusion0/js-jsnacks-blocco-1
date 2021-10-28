// ---Jsnack-1---

/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*
--> DONE    1. Creo un array vuoto che dovrà contenere i 2 numeri inseriti dall'utente => const num = [];
        --> DONE    1.2 Utilizzo un ciclo for per chiedere il numero 2 volte. => for
        --> DONE    1.2 Utilizzo un push all'interno del ciclo per aggiungere i 2 numeri all'interno dell'array => num.push();
--> DONE    2. Scorro all'interno dell'array => for
        --> DONE    2.1 Creo una variabile in cui assegno il primo valore dell'array fuori dal ciclo => let highNum = num[0];
        --> DONE    2.2 Utilizzo la variabile highNum all'interno del ciclo e la confronto con gli altri elementi dell'array. => if (num[i] >= highNum)
                --> DONE    2.2.1 Se l'elemento dell'array dovesse essere maggiore o uguale ad highNum, assegno ad esso il valore di num[i] => highNum = num[i];
        --> DONE    2.3 Stampo il risultato nell'html
                --> DONE    2.3.1 Creo una variabile in cui assegno l'elemento nella quale faccio riferimento => let textNum = document.querySelector(".higher_number");
                --> DONE    2.3.2 Appendo il risultato nella nuova variabile. => append

*/

let num = [];

for (let i = 1; i < 3; i++) {
    let userNum = prompt(`Inserisci il numero: ${i}`);
    num.push(userNum);
}

console.log(num);

let highNum = num[0];

for(let j = 0; j < num.length; j++) {
    if (num[j] >= highNum) {
        highNum = num[j];
    }
}

let textNum = document.querySelector(".higher_number");
textNum.append("Il numero maggiore che hai inserito è: ", highNum);
