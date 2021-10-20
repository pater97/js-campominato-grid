//CONSEGNA
/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

//definire variabile di inserimento 
const stampSquare = document.querySelector(".container")
//chiedere alll'utente attraverso un prompt il livello di difficoltà
const gameDifficult = parseInt(prompt(`indica il livello di difficoltà che desideri, da 1 a 3`))
//utilizzo di un condizionale per assegnare il numero di caselle in base al livello e ne stabilisco la grandezza
if(gameDifficult == 1){
    var numCaselle = 100
    var sizeSquare = `one`
}else if(gameDifficult == 2){
    var numCaselle = 81
    var sizeSquare = `two`
}else if(gameDifficult == 3){
    var numCaselle = 49
    var sizeSquare = `trhee`
}else{
    alert(`!ATTENZIONE! il livello indicato non è disponibile`)
}
//utilizzare una funzione per il ciclo for 
function cycle (numero){
    for (let i = 1; i <= numero;i++){
        //creare un nuovo div
        const square = document.createElement(`div`);
        //creare variabile per inserimento testo
        const text = document.createTextNode(i);
        //inserire testo nel div
        square.appendChild(text)
        //aggiungere le classi da utilizzare
        square.className=`square ${sizeSquare}`
        //stampare il quadrato
        stampSquare.append(square)
        //al click aggiungere il background azzurro
        square.addEventListener(`click`,function(){
        square.style.backgroundColor="#85FFC7"
    })
    console.log(square);
    }
}
//invocare la funzione
cycle(numCaselle);
