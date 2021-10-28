// ---Jsnack-4---

/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

/*

--DONE  1.  Creo un'array con alcuni nomi (che saranno gli invitati alla festa) => let invited = [..];
--DONE  2.  Chiedo all'utente il suo nome => prompt
3.  Scorro la lista degli invitati tramite un ciclo => for
    3.1 Confronto il suo nome con tutti gli invitati = if (nome == invited[i])
*/

let invited = ["mario", "luca", "simone", "loris", "adriano", "martina", "lorena"];
// console.log(invited);

let result = document.querySelector(".results");

let userName = prompt("Inserisci il tuo nome");
// console.log(userName);

let found = false;

for(let i = 0; i < invited.length; i++) {
    if(userName == invited[i]) {
        found = true;
        result.append("Sei presente nella lista, puoi partecipare!");
    }
}

if (!found) {
    result.append("Non sei presente nella lista, non puoi partecipare!");
}