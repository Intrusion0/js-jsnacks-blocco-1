// ---Jsnack-3---

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*

--DONE  1. Creo un'array in cui conterrà i 10 numeri inseriti dall'utente => let contNum = [];
--DONE  2. Creo un ciclo for che verrà eseguito 10 volte, in cui chiederà ogni giro un numero all'utente. => prompt
    --DONE  2.1 Utilizzo .push per riempire l'array ogni volta che l'utente inserisce il numero. => contNum.push[i];
--DONE  3. Creo un ciclo for in cui sommerò tutti i numeri inseriti dall'utente. => for
    --DONE  3.1 Creo una variabile "SUM" che conterrà la somma totale di tutti i numeri dell'array.
    --DONE  3.2 Sommo tutti i numeri tramite => sum += contNum[i];
*/

let contNum = [];
let result = document.querySelector(".results");

for (let i = 1; i < 11; i++) {
    let userNum = parseInt(prompt(`Inserisci il numero: ${i}`));
    contNum.push(userNum);
}

console.log(contNum);

let sum = 0;

for (let j = 0; j < contNum.length; j++) {
    sum += contNum[j];
}

result.append("Somma dell'array = ", sum);

console.log("La somma dell'array è di: ", sum);