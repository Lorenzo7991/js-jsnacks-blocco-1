//JS - DOM test response
console.log("JS OK");

//Declaring array variable
const arrayTail = [];

//Declaring array number of elements
const numberOfElements = parseInt(prompt("Inserisci il numero di elementi dell'Array:"))

//Assigning arrayTail random values
for (let i = 0; i < numberOfElements; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    arrayTail.push(randomNumber);
}
// checking arrayTail value
console.table(arrayTail);

//Declaring last 5 numbers variable container
const lastNumbers = [];

//Recovering and assigning last 5 numbers to lastNumbers
for (let i = arrayTail.length - 5; i < arrayTail.length; i++) {
  lastNumbers.push(arrayTail[i]);
}

//Printing 5 last numbers
console.log("Ultimi 5 numeri recuperati:", lastNumbers);
