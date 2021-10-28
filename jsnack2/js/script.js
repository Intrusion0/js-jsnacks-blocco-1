// ---Jsnack-2---

/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*  METODO ALTERNATIVO

--> DONE    1. Creo un array vuoto che dovrà contenere le due parole inserite dall'utente => const words = [];
        --> DONE    1.2 Utilizzo un ciclo for per chiedere le parole 2 volte. => for
        --> DONE    1.2 Utilizzo un push all'interno del ciclo per aggiungere le 2 parole all'interno dell'array => words.push();
--> DONE    2. Scorro all'interno dell'array => for
        --> DONE    2.1 Creo una variabile in cui assegno la lunghezza del primo valore dell'array fuori dal ciclo => let wordsLenMax = words[0].length;
        --> DONE    2.2 Confronto la variabile con la lunghezza degli altri elementi dell'array per trovare la lunghezza maggiore => if(words[i].length >= wordsLenMax);
                --> DONE    2.2.1 Se la lunghezza dell'elemento dell'array dovesse essere maggiore o uguale a wordsLen, assegno ad esso il valore di words[i] => wordsLenMax = words[i];
--> DONE    3. Creo un altro ciclo uguale a quello di prima, solamente che devo trovare la lunghezza MINORE dell'elemento. => for
        --> DONE 3.1 Creo un'altra variabile e la confronto con la lunghezza degli altri elementi dell'array per trovare la lunghezza minore => if(words[j].length < wordsLenMin);
                --> DONE    3.3.1 Se la lunghezza dell'elemento dell'array dovesse essere minore a wordsLen, assegno ad esso il valore di words[i] => wordsLenMin = words[i];
--> DONE    4 Stampo il risultato nell'html
         --> DONE    4.1 Creo due variabili in cui assegno nella prima il valore minore, nella seconda invece assegno il valore maggiore 
                --> DONE    4.1.1 => let maxWords = document.querySelector(".max_words");
                --> DONE    4.1.2 => let minWords = document.querySelector(".min_words");
        --> DONE    4.2 Appendo il risultato nelle variabili. => append
*/

let firstwords = prompt("Inserisci la prima parola");
let secondwords = prompt("Inserisci la seconda parola");
let textResult = document.querySelector(".results");

if (firstwords.length > secondwords.length) {
    textResult.append(secondwords + ' ' + firstwords);
} else if (firstwords.length == secondwords.length) {
    textResult.append('Le parole hanno la stessa lunghezza ' + secondwords + ' ' + firstwords);
} else {
    textResult.append(firstwords + ' ' + secondwords);
}


// --METODO ALTERNATIVO (funzionante solo se inserisco la parola più lunga nel primo prompt);

// for (let i = 1; i < 3; i++) {
//     let userWords = prompt(`Inserisci la parola n° ${i}`);
//     words.push(userWords);
// }

// console.log(words);

// let wordsLenMin = words[0].length;

// // Parola più corta
// for (let i = 0; i < words.length; i++) {
//     if(words[i].length < wordsLenMin) {
//         wordsLenMin = words[i];
//         console.log("la parola più corta è: ", words[i]);
//     }
// }

// minWords.append("La parola più corta è: ", wordsLenMin);

// let wordsLenMax = words[0].length;

// // Parola più lunga
// for(let j = 0; j < words.length; j++) {
//     if (words[j].length >= wordsLenMax) {
//         wordsLenMax = words[j];
//         console.log("la parola più lunga è: ", words[j]);
//     }
// }

// maxWords.append("La parola più lunga è: ", wordsLenMax);