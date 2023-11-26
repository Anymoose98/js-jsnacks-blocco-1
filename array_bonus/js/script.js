// Creazione di due array
let array1 = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ]
let array2 = []

console.log(array1)
console.log(array2)

// Aggiungere elementi finchè non raggiunge lo stesso numero
for (let i = 0; i < array1.length; i++){

    let numero_generato = Math.floor(Math.random() * 100) + 1;
    array2.push(numero_generato)
}

console.log(array1)
console.log(array2)
