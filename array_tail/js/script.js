// chiedere all'utente quanti numeri da creare

let numeri_creare = prompt("quanti numeri vuoi?")
console.log(numeri_creare)

// creazione numeri
let numeri = []

for(let i = 0; i < numeri_creare; i++){
    let numero_generato = Math.floor(Math.random() * 100) + 1;
    numeri.push(numero_generato)
}
console.log(numeri)

// mostrare solo i numeri richiesti
let numeri_visualizzati = numeri.slice(0,prompt("Quanti ne vuoi visualizzare"))
console.log(numeri_visualizzati)