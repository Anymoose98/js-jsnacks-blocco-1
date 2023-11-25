// lista frigorifero
let frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(frigorifero)

// aggiungere pesca
frigorifero.push("pesca")
console.log(frigorifero)


// cercare cocomero
let esito

for(let i = 0; i < frigorifero.length; i++){
    if("cocomero" == frigorifero[i]){
        esito = true
    }
}

    if(esito == true){
        console.log("Trovato! Devo solo preparare il cocktail.")
    }
    else{
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }