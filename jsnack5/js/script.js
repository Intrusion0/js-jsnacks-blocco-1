// ---Jsnack-5---

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*

--DONE  1.  Creo un array vuoto => let contNum = [];
--DONE  2.  Creo un ciclo for in cui chiederò all'utente di inserire un numero => for - prompt
3.  Creo una condizione per controllare se sia dispari. => if(numeroInserito % 2 !== 0)
    3.1 Se è dispari lo inserisco all'interno dell'array => contNum.push

*/

let contNum = [];

for(let i = 1; i <= 6; i++){
    let userNum = parseInt(prompt(`Inserisci il numero: ${i}`));
    if (userNum % 2 !== 0) {
        contNum.push(userNum);
    }
    console.log(userNum);
    console.log(contNum);
}